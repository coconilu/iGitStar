<template>
  <transition mode="out-in">
    <article class="home-page-main" v-if="userName.length">
      <transition name="home-page-switcher" mode="out-in">
        <section class="skeleton-container" v-if="shouldShowSkeleton">
          <Skeleton v-for="item of [1, 2, 3]" :key="item"></Skeleton>
        </section>
        <div class="cards-container" v-else>
          <CardContainer>
            <CollectCard v-for="(collect, index) of collectionsFromServer" :key="collect.full_name" :metaData="collect" :index="index" @toTheTop="repositoryToTop" @removeFromCollections="removeFromCollections"></CollectCard>
            <StarCard v-for="(star, index) of starsFromServer" v-if="!star.hasCollected" :key="star.full_name" :metaData="star" :index="index" @addToCollections="addToCollections"></StarCard>
          </CardContainer>
        </div>
      </transition>
      <section class="indication" v-show="canShowIndication">
        <transition name="indication-switcher" mode="out-in" leave-active-class="animated fadeOutDown">
          <Skeleton v-if="!hasLoadedAllStars"></Skeleton>
          <span v-else>—— · No More · ——</span>
        </transition>
      </section>
    </article>
    <Introduction v-else></Introduction>
  </transition>
</template>

<script>
import Skeleton from '@/components/Skeleton'
import StarCard from '@/components/StarCard'
import CollectCard from '@/components/CollectCard'
import CardContainer from '@/components/CardContainer'
import Introduction from '@/components/Introduction'
export default {
  name: 'HomePageMain',
  components: {
    Skeleton,
    StarCard,
    CollectCard,
    CardContainer,
    Introduction
  },
  data: function () {
    return {
      hasLoadedAllStars: false,
      canShowIndication: false,
      canShowStars: false,
      shouldShowSkeleton: true,
      isLoadingStars: false,
      collectionsFromServer: [],
      starsFromServer: [],
      page: 1,
      animationOutTime: 1000
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
          let collectionsTatol = this.collectionsFromLocal.length
          if (this.collectionsFromLocal && collectionsTatol > 0) {
            // 设置一次性加载上限为 7
            let mark = 0
            let partOfCollection
            let firstTimeLoad = true
            let getCollectionsFromServerByStep = () => {
              partOfCollection = this.collectionsFromLocal.slice(mark, mark += 7)
              this.getCollectionsFromServer(partOfCollection, result => {
                this.shouldShowSkeleton = false
                this.smoothInsertItemByTimeout(this.collectionsFromServer, result, undefined, () => {
                  mark >= collectionsTatol ? (this.canShowStars = true) : getCollectionsFromServerByStep()
                  this.canShowIndication = true
                }, firstTimeLoad ? (firstTimeLoad = false, 500) : 0)
              })
            }
            getCollectionsFromServerByStep()
          } else {
            this.canShowStars = true
          }
        } else {
          // logout
          this.hasLoadedAllStars = false
          this.canShowIndication = false
          this.canShowStars = false
          this.shouldShowSkeleton = true
          this.isLoadingStars = false
          this.starsFromServer = []
          this.collectionsFromServer = []
          this.page = 1
          this.$store.dispatch('logout')
        }
      },
      immediate: true
    },
    canShowStars: {
      handler: function (newValue) {
        if (newValue) {
          let toLoadStars = (shoulRegisterOnscroll) => {
            this.loadStars((targetArr, sourceArr) => {
              this.shouldShowSkeleton = false
              this.smoothInsertItemByTimeout(targetArr, sourceArr, () => {
                this.canShowIndication = false
              }, () => {
                this.canShowIndication = true
                this.isLoadingStars = false
                shoulRegisterOnscroll && this.onVisible(document.querySelector('section.indication'), () => {
                  toLoadStars(false)
                })
              }, 0)
            })
          }
          if (!document.querySelector('section.indication') || document.querySelector('section.indication').getBoundingClientRect().top < window.innerHeight) {
            toLoadStars(true)
          } else {
            this.onVisible(document.querySelector('section.indication'), () => {
              toLoadStars(false)
            })
          }
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
        setTimeout(() => {
          this.collectionsFromServer.unshift(this.starsFromServer[index])
        }, this.animationOutTime)
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
      }, this.animationOutTime)
    },
    smoothInsertItemByTimeout: function (targetArr, sourceArr, onStart, onDone, delay) {
      var index = 0
      onStart && onStart()
      var loop = () => {
        setTimeout(() => {
          if (index < sourceArr.length) {
            targetArr.push(sourceArr[index++])
            loop()
          } else {
            onDone && onDone()
          }
        }, 200)
      }
      setTimeout(() => {
        loop()
      }, delay || 0)
    },
    loadStars: function (insertHandler) {
      if (!this.hasLoadedAllStars) {
        this.isLoadingStars = true
        this.getStarsFromServer(this.userName, this.page++, result => {
          if (result.length >= 0) {
            if (result.length < 30) this.hasLoadedAllStars = true
            this.collectionsFromLocal.length && result.forEach(item => {
              if (this.collectionsFromLocal.includes(item.full_name)) item.hasCollected = true
            })
            if (insertHandler) {
              insertHandler(this.starsFromServer, result)
            } else {
              this.smoothInsertItemByTimeout(this.starsFromServer, result)
            }
          } else {
            this.hasLoadedAllStars = true
          }
        })
      }
    },
    onVisible: function (selector, callback) {
      let timeout
      window.addEventListener('scroll', () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          if (!this.isLoadingStars && selector && selector.getBoundingClientRect().top < window.innerHeight) {
            callback && callback()
          }
        }, 200)
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
.home-page-switcher-enter-active {
  opacity: 1;
  transition: all 0.1s linear;
}
.home-page-switcher-leave-active {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.2s linear;
}
section.skeleton-container {
  position: relative;
}
section.collection-container {
  position: relative;
}
section.starcard-container {
  position: relative;
}
section.indication {
  line-height: 200%;
  font-size: 0.8em;
}
section.indication > span {
  vertical-align: middle;
  font-size: 0.8em;
  opacity: 0.5;
}
.indication-switcher-enter-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: flipInY;
}
.indication-switcher-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: flipOutY;
}
@media screen and (max-width: 900px) {
  article.home-page-main {
    width: 100%;
    padding: 0 10px;
  }
}
</style>
