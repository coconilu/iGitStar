<template>
  <article class="home-page-main">
    <section class="skeleton-container"></section>
    <section class="collection-container">
      <CollectCard v-for="(collect, index) of collectionsFromServer" :key="collect.full_name" :metaData="collect" :index="index" @toTheTop="repositoryToTop" @removeFromCollections="removeFromCollections"></CollectCard>
    </section>
    <section class="starcard-container">
      <StarCard v-for="(star, index) of filterToShowStars" :key="star.full_name" :metaData="star" :index="index" @addToCollections="addToCollections"></StarCard>
    </section>
    <section class="indication">
      <span v-if="hasLoadedAllStars">—— · No More · ——</span>
    </section>
  </article>
</template>

<script>
import StarCard from '@/components/StarCard'
import CollectCard from '@/components/CollectCard'

export default {
  name: 'HomePageMain',
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  components: { StarCard, CollectCard },
  data: function () {
    return {
      hasLoadedAllStars: false,
      collectionsFromLocal: [],
      collectionsFromServer: [],
      starsFromServer: [],
      page: 1
    }
  },
  methods: {
    gainCollectionsFromLocal: function () {
      this.collectionsFromLocal = JSON.parse(window.localStorage.getItem('myCollections')) || []
    },
    saveCollections: function (value) {
      window.localStorage.setItem('myCollections', JSON.stringify(value))
    },
    emptyCollections: function () {
      window.localStorage.setItem('myCollections', JSON.stringify([]))
    },
    gainUserName: function () {
      this.userName = window.localStorage.getItem('userName') || ''
    },
    saveUserName: function () {
      window.localStorage.setItem('userName', this.userName)
    },
    emptyUserName: function () {
      window.localStorage.setItem('userName', '')
    },
    getCollectionsFromServer: function (arr, onSuccess, onFailure) {
      var resultPromise = arr.map((item, index) => {
        return this.$axios.get(`https://api.github.com/repos/${item}`, {
          'headers': { 'Accept': 'application/vnd.github.v3+json' }
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
        'headers': { 'Accept': 'application/vnd.github.v3+json' },
        'params': { 'page': page }
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
        'headers': { 'Accept': 'application/vnd.github.v3+json' }
      }).then(response => {
        onSuccess && onSuccess(response.data)
      }).catch(reason => {
        onFailure && onFailure(reason)
      })
    },
    addToCollections: function (index) {
      this.starsFromServer[index].hasCollected = true
      this.collectionsFromLocal.unshift(this.starsFromServer[index].full_name)
      this.collectionsFromServer.unshift(this.starsFromServer[index])
      setTimeout(this.saveCollections)
    },
    repositoryToTop: function (index) {
      Array.prototype.unshift.apply(this.collectionsFromLocal, this.collectionsFromLocal.splice(index, 1))
      Array.prototype.unshift.apply(this.collectionsFromServer, this.collectionsFromServer.splice(index, 1))
      setTimeout(this.saveCollections)
    },
    removeFromCollections: function (index) {
      this.collectionsFromLocal.splice(index, 1)
      this.collectionsFromServer.splice(index, 1)
      this.starsFromServer[index].hasCollected = false
      setTimeout(this.saveCollections)
    },
    smoothInsertItem: function (step, targetArr, sourceArr) {
      var end = 0
      window.requestAnimationFrame(function insertItem () {
        targetArr.push.apply(targetArr, sourceArr.slice(end, end + step))
        end += step
        if (end < sourceArr.length) {
          window.requestAnimationFrame(insertItem)
        }
      })
    },
    loadMoreStars: function () {
      if (!this.hasLoadedAllStars) {
        this.getStarsFromServer(this.userName, this.page++, result => {
          if (result.length < 30) this.hasLoadedAllStars = true
          this.smoothInsertItem(10, this.starsFromServer, result)
        })
      }
    }
  },
  created: function () {
    // this.gainUserName()
    window.addEventListener('scroll', function () {
      // auto load more stars
    })
  },
  watch: {
    userName: {
      handler: function (newValue) {
        if (newValue.length) {
          // login
          this.gainCollectionsFromLocal()
          if (this.collectionsFromLocal && this.collectionsFromLocal.length > 0) {
            this.getCollectionsFromServer(this.collectionsFromLocal, result => {
              this.smoothInsertItem(10, this.collectionsFromServer, result)
            })
          }
          this.page = 1
          this.getStarsFromServer(newValue, this.page++, result => {
            if (result.length >= 0) {
              // use api requestAnimationFrame
              this.smoothInsertItem(10, this.starsFromServer, result)
              if (result.length < 30) this.hasLoadedAllStars = true
            } else {
              // TODO: to show username unfounded
              this.hasLoadedAllStars = true
            }
          })
          setTimeout(this.saveUserName)
        } else {
          // logout
          this.starsFromServer = []
          this.collectionsFromServer = []
          this.collectionsFromLocal = []
          setTimeout(this.emptyCollections)
          setTimeout(this.emptyUserName)
        }
      },
      immediate: true
    }
  },
  computed: {
    filterToShowStars: function () {
      return this.starsFromServer.filter(item => {
        return !item.hasCollected
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
  display: none;
  position: absolute;
  top: 70;
  left: 0;
  width: 100%;
  min-height: 300px;
  background-color: #a7e8bd;
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
  line-height: 100%;
  font-size: 0.8em;
  opacity: 0.5;
}
section.indication > span {
  vertical-align: middle;
  font-size: 0.8em;
}
</style>
