<template>
  <div class="calculator">
    <div v-if="$store.state.loaded">
        {{ amount }}
        {{ selectedPortfolioType }}
        <input type="number" v-model="amount" placeholder="1000">

        <input type="radio" id="conservative" value="conservative" v-model="selectedPortfolioType">
        <label for="conservative">Conservative</label>
        <input type="radio" id="moderateConservative" value="moderateConservative" v-model="selectedPortfolioType">
        <label for="moderateConservative">Moderate Conservative</label>
      <input type="radio" id="moderate" value="moderate" v-model="selectedPortfolioType">
      <label for="moderate">Moderate</label>
      <input type="radio" id="moderateAggressive" value="moderateAggressive" v-model="selectedPortfolioType">
      <label for="moderateAggressive">Moderate Aggressive</label>
      <input type="radio" id="aggressive" value="aggressive" v-model="selectedPortfolioType">
      <label for="aggressive">Aggressive</label>

      <div>
        {{ $store.getters.totalChanged }}
        {{ $store.getters.totalChangedPercent }}
      </div>

      <div>
        <PortfolioItem label="Big Stocks" symbol='VOO' :portfolioType="$store.state.selectedPortfolioType" :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Small" symbol='VB' :portfolioType="$store.state.selectedPortfolioType" :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Emerging" symbol='VWO' :portfolioType="$store.state.selectedPortfolioType" :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Real Estate" symbol='VNQ' :portfolioType="$store.state.selectedPortfolioType" :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Government" symbol='SHY' :portfolioType="$store.state.selectedPortfolioType" :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Corporate" symbol='LQD' :portfolioType="$store.state.selectedPortfolioType" :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Intl" symbol='VEA' :portfolioType="$store.state.selectedPortfolioType" :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>

  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem'

import { getData } from '../utils/api'
import { acornsPortfolio } from '../utils/acorns'
export default {
  name: 'HelloWorld',
  components: {PortfolioItem},
  data () {
    return {
    }
  },
  created () {
    getData().then((data) => {
      this.$store.commit('setState', { key: 'portfolios', value: data })
      this.$store.commit('setState', { key: 'loaded', value: true })
    })
    console.log(acornsPortfolio(this.$store.state.selectedPortfolioType))
  },
  methods: {
    setValue (symbol, amount) {
      this.$store.commit('setValues', { key: symbol, value: amount })
    }
  },
  computed: {
    amount: {
      get () {
        return this.$store.state.amount
      },
      set (amount) {
        this.$store.commit('setState', { key: 'amount', value: amount })
      }
    },
    selectedPortfolioType: {
      get () {
        return this.$store.state.selectedPortfolioType
      },
      set (type) {
        this.$store.commit('setState', { key: 'selectedPortfolioType', value: type })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
