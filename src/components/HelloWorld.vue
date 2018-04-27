<template>
  <div class="calculator">
    <div v-if="loaded">
        {{ amount }}
        {{ selectedPortfolioType }}
        <input type="number" v-model="amount" placeholder="1000">

        <input type="radio" id="conservative" value="conservative" v-model="selectedPortfolioType">
        <label for="conservative">Conservative</label>
        <input type="radio" id="moderate" value="moderate" v-model="selectedPortfolioType">
        <label for="moderate">Moderate</label>
      <div>
        <PortfolioItem label="Big Stocks" symbol='VOO' :portfolioType="selectedPortfolioType" :amount="amount" :portfolios="portfolios" @setValue="setValue"></PortfolioItem>
        <PortfolioItem label="Small Stocks" symbol='VB' :portfolioType="selectedPortfolioType" :amount="amount" :portfolios="portfolios" @setValue="setValue"></PortfolioItem>
        <PortfolioItem label="Emerging Markets Stocks" symbol='VWO' :portfolioType="selectedPortfolioType" :amount="amount" :portfolios="portfolios" @setValue="setValue"></PortfolioItem>
        <PortfolioItem label="Real Estate Stocks" symbol='VNQ' :portfolioType="selectedPortfolioType" :amount="amount" :portfolios="portfolios" @setValue="setValue"></PortfolioItem>
        <PortfolioItem label="Government Bonds" symbol='SHY' :portfolioType="selectedPortfolioType" :amount="amount" :portfolios="portfolios" @setValue="setValue"></PortfolioItem>
        <PortfolioItem label="Corporate Bonds" symbol='LQD' :portfolioType="selectedPortfolioType" :amount="amount" :portfolios="portfolios" @setValue="setValue"></PortfolioItem>
        <PortfolioItem label="Intl Big Stocks" symbol='VEA' :portfolioType="selectedPortfolioType" :amount="amount" :portfolios="portfolios" @setValue="setValue"></PortfolioItem>
      </div>
    </div>
    <div v-else>
      Not loaded
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
      msg: 'Welcome to Your Vue.js App',
      amount: 1000,
      selectedPortfolioType: 'moderate',
      loaded: false,
      portfolios: {},
      values: {}
    }
  },
  created () {
    getData().then((data) => {
      this.portfolios = data
      this.loaded = true
    })
    console.log(acornsPortfolio(this.selectedPortfolioType))
  },
  methods: {
    setValue (symbol, amount) {
      this.values[symbol] = amount
    }
  },
  computed: {
    totalChange () {
      return console.log(this.values)
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
