<template>
  <StarCard :metaData="metaData">
      <button style="background-color: #BC3F4E" title="cancle collected" @click="removeFromCollections"><svg viewBox="0 0 1024 1024" version="1.1" width="30" height="30"><path d="M949.888 457.258667c26.069333-29.824 13.866667-67.52-24.789333-76.309334L681.728 325.546667l-127.786667-214.677334c-20.266667-34.069333-59.925333-34.090667-80.213333 0l-127.786667 214.677334-243.370666 55.381333c-38.442667 8.746667-50.858667 46.506667-24.789334 76.309333l164.394667 188.053334-22.613333 248.917333c-3.584 39.466667 28.458667 62.805333 64.896 47.146667l237.781333-102.037334a21.333333 21.333333 0 0 0-16.810667-39.210666L267.626667 902.186667c-6.698667 2.88-6.229333 3.221333-5.568-4.096l24.277333-267.093334-176.426667-201.813333c-4.757333-5.461333-4.906667-5.034667 2.133334-6.634667l261.205333-59.434666 137.152-230.4c3.733333-6.293333 3.136-6.293333 6.869333 0l137.173334 230.4 261.205333 59.434666c7.125333 1.621333 6.954667 1.088 2.133333 6.613334l-176.426666 201.813333 24.256 267.093333a21.333333 21.333333 0 1 0 42.496-3.84l-22.613334-248.917333 164.394667-188.053333z" fill="#ffffff" p-id="4923"></path></svg></button>
      <button style="background-color: #FDC068" title="to the top" @click="toTheTop"><svg t="1534993217247" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8389" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M483.029333 286.165333l30.165334-30.208 415.957333 415.829334c16.426667 16.426667 16.64 43.648 0 60.288a42.538667 42.538667 0 0 1-60.330667 0.042666L513.28 376.746667l-355.242667 355.413333a42.496 42.496 0 0 1-60.288 0 42.837333 42.837333 0 0 1-0.085333-60.330667l383.701333-383.872 1.706667-1.749333z" fill="#ffffff" p-id="8390"></path></svg></button>
  </StarCard>
</template>

<script>
import StarCard from '@/components/StarCard.vue'

export default {
  name: 'CollectCard',
  props: ['metaData', 'index'],
  components: { StarCard },
  methods: {
    toTheTop: function () {
      this.$emit('toTheTop', this.index)
    },
    removeFromCollections: function () {
      this.$emit('removeFromCollections', this.index)
    }
  }
}
</script>
