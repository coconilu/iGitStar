<template>
  <article class="home-page-main">
    <section class="skeleton-container"></section>
    <section class="collection-container">
      <CollectCard v-for="collect in collectionsFromServer" :key="collect.full_name" metaData="collect"></CollectCard>
    </section>
    <section class="starcard-container">
      <StarCard v-for="star in starsFromServer" :key="star.full_name" metaData="star"></StarCard>
    </section>
  </article>
</template>

<script>
import StarCard from '@/components/StarCard'
import CollectCard from '@/components/CollectCard'

export default {
  name: 'HomePageMain',
  components: { StarCard, CollectCard },
  data: function () {
    return {
      isLoadedData: false,
      userName: 'coconilu',
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
    saveUserName: function (value) {
      window.localStorage.setItem('userName', value)
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
    }
  },
  created: function () {
    // this.gainUserName()
  },
  watch: {
    userName: function (newValue) {
      if (newValue.length) {
        // login
        this.gainCollectionsFromLocal()
        if (this.collectionsFromLocal && this.collectionsFromLocal.length > 0) {
          this.getCollectionsFromServer(this.collectionsFromLocal, result => {
            this.collectionsFromServer = result
          })
        }
        this.page = 1
        this.getStarsFromServer(newValue, this.page++, result => {
          if (result.length) {
            Array.prototype.push.apply(this.starsFromServer, result)
          } else {
            // TODO to show username unfound
          }
        })
      } else {
        // logout
        this.starsFromServer = []
        this.collectionsFromServer = []
        this.collectionsFromLocal = []
        this.emptyCollections()
      }
    }
  }
}
</script>

<style>
article.home-page-main {
  width: 1000px;
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
</style>
