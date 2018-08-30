<template>
  <article class="home-page-main">
    <section class="skeleton-container">
      <Skeleton></Skeleton>
    </section>
    <section class="collection-container">
      <CollectedCardContainer>
        <CollectCard v-for="(collect, index) of collectionsFromServer" :key="collect.full_name" :metaData="collect" :index="index" @toTheTop="repositoryToTop" @removeFromCollections="removeFromCollections"></CollectCard>
      </CollectedCardContainer>
    </section>
    <section class="starcard-container">
      <StarCardContainer>
        <StarCard v-for="(star, index) of starsFromServer" v-show="!star.hasCollected" :key="star.full_name" :metaData="star" :index="index" @addToCollections="addToCollections"></StarCard>
      </StarCardContainer>
    </section>
    <section class="indication">
      <span v-if="hasLoadedAllStars">—— · No More · ——</span>
    </section>
  </article>
</template>

<script>
import Skeleton from '@/components/Skeleton'
import StarCard from '@/components/StarCard'
import CollectCard from '@/components/CollectCard'
import StarCardContainer from '@/components/StarCardContainer'
import CollectedCardContainer from '@/components/CollectedCardContainer'
export default {
  name: 'HomePageMain',
  components: {
    Skeleton,
    StarCard,
    CollectCard,
    StarCardContainer,
    CollectedCardContainer
  },
  data: function () {
    return {
      hasLoadedAllStars: false,
      collectionsFromServer: [],
      starsFromServer: [],
      page: 1
    }
  },
  computed: {
    userName: function () {
      return this.$store.state.userName
    },
    collectionsFromLocal: function () {
      return this.$store.state.collections
    }
  },
  watch: {
    userName: {
      handler: function (newValue) {
        if (newValue.length) {
          // login
          this.hasLoadedAllStars = false
          this.page = 1
          if (this.collectionsFromLocal && this.collectionsFromLocal.length > 0) {
            this.getCollectionsFromServer(this.collectionsFromLocal, result => {
              this.smoothInsertItem(10, this.collectionsFromServer, result)
              this.loadMoreStars(() => {
                this.onVisible(document.querySelector('section.indication'), () => { this.loadMoreStars() })
              })
            })
          } else {
            this.loadMoreStars(() => {
              this.onVisible(document.querySelector('section.indication'), () => { this.loadMoreStars() })
            })
          }
        } else {
          // logout
          this.starsFromServer = []
          this.collectionsFromServer = []
          this.$store.dispatch('logout')
        }
      },
      immediate: true
    }
  },
  methods: {
    getCollectionsFromServer: function (arr, onSuccess, onFailure) {
      var resultPromise = arr.map((item, index) => {
        return this.$axios.get(`https://api.github.com/repos/${item}`, {
          'headers': {
            'Accept': 'application/vnd.github.v3+json'
          }
        })
      })
      Promise.all(resultPromise).then(result => {
        onSuccess && onSuccess(result.map(item => {
          return item.data
        }))
      }).catch(reason => {
        onFailure && onFailure(reason)
      })
    },
    getStarsFromServer: function (userName, page, onSuccess, onFailure) {
      this.$axios.get(`https://api.github.com/users/${userName}/starred`, {
        'headers': {
          'Accept': 'application/vnd.github.v3+json'
        },
        'params': {
          'page': page
        }
      }).then(response => {
        if (response.status === 200) {
          onSuccess && onSuccess(response.data)
        }
      }).catch(reason => {
        onFailure && onFailure(reason)
      })
    },
    getRepositoryFromServer: function (repoName, onSuccess, onFailure) {
      this.$axios.get(`https://api.github.com/repos/${repoName}`, {
        'headers': {
          'Accept': 'application/vnd.github.v3+json'
        }
      }).then(response => {
        onSuccess && onSuccess(response.data)
      }).catch(reason => {
        onFailure && onFailure(reason)
      })
    },
    addToCollections: function (index) {
      if (!this.starsFromServer[index].hasCollected) {
        this.$set(this.starsFromServer[index], 'hasCollected', true)
        this.collectionsFromServer.unshift(this.starsFromServer[index])
        this.$store.dispatch('persistCollections', {
          type: 'add',
          newItem: this.starsFromServer[index].full_name
        })
      }
    },
    repositoryToTop: function (index) {
      if (index !== 0) {
        this.collectionsFromServer.unshift.apply(this.collectionsFromServer, this.collectionsFromServer.splice(index, 1))
        this.$store.dispatch('persistCollections', {
          type: 'toTop',
          toTopIndex: index
        })
      }
    },
    removeFromCollections: function (index) {
      var targetFullName = this.collectionsFromLocal[index]
      this.collectionsFromServer.splice(index, 1)
      this.$store.dispatch('persistCollections', {
        type: 'remove',
        removeIndex: index
      })
      setTimeout(() => {
        this.starsFromServer.length && this.starsFromServer.forEach(item => {
          if (item.full_name === targetFullName) this.$set(item, 'hasCollected', false)
        })
      })
    },
    smoothInsertItem: function (step, targetArr, sourceArr) {
      var end = 0
      var insertItem = function () {
        targetArr.push.apply(targetArr, sourceArr.slice(end, end + step))
        end += step
        if (end < sourceArr.length) {
          window.requestAnimationFrame(insertItem)
        }
      }
      window.requestAnimationFrame(insertItem)
    },
    loadMoreStars: function (callback) {
      if (!this.hasLoadedAllStars) {
        this.getStarsFromServer(this.userName, this.page++, result => {
          if (result.length >= 0) {
            if (result.length < 30) this.hasLoadedAllStars = true
            this.collectionsFromLocal.length && result.forEach(item => {
              if (this.collectionsFromLocal.includes(item.full_name)) item.hasCollected = true
            })
            this.smoothInsertItem(10, this.starsFromServer, result)
          } else {
            // TODO: to show username unfounded
            this.hasLoadedAllStars = true
          }
          callback && callback()
        })
      }
    },
    onVisible: function (selector, callback) {
      var shouldRun = true
      window.addEventListener('scroll', function () {
        if (shouldRun) {
          shouldRun = false
          // TODO when onVisible
          if (selector.getBoundingClientRect().top < window.innerHeight) {
            callback && callback()
          }
          setTimeout(() => {
            shouldRun = true
          }, 200)
        }
      })
    }
  }
}
</script>

<style>
article.home-page-main {
  width: 900px;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
}
section.skeleton-container {
  position: relative;
}
section.collection-container {
  position: relative;
}
section.division {
  position: relative;
}
section.starcard-container {
  position: relative;
}
section.indication {
  line-height: 200%;
  font-size: 0.8em;
  opacity: 0.5;
}
section.indication > span {
  vertical-align: middle;
  font-size: 0.8em;
}
</style>
