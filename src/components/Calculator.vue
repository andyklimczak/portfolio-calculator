<template>
  <div v-if="$store.state.loaded">
    <div class="is-size-3 center">
      Starting with
      <div class="field">
        <p class="control has-icons-left">
          <input class="input is-large" type="number" v-model="amount" placeholder="1000">
          <span class="icon is-small is-left">
    <i class="fa fa-dollar-sign"></i>
    </span>
        </p>
      </div>
      allocated using the
      <div class="control portfolios">
        <label class="radio">
          <input type="radio" id="conservative" value="conservative" v-model="selectedPortfolioType">
          Conservative
        </label>
        <label class="radio">
          <input type="radio" id="moderateConservative" value="moderateConservative"
                 v-model="selectedPortfolioType">
          Moderate Conservative
        </label>
        <label class="radio">
          <input type="radio" id="moderate" value="moderate" v-model="selectedPortfolioType">
          Moderate
        </label>
        <label class="radio">
          <input type="radio" id="moderateAggressive" value="moderateAggressive" v-model="selectedPortfolioType">
          Moderate Aggressive
        </label>
        <label class="radio">
          <input type="radio" id="aggressive" value="aggressive" v-model="selectedPortfolioType">
          Aggressive
        </label>
      </div>
      Acorns portfolio after 1 year returns:
    </div>

    <div class="center results">
      <div class="is-size-2">
        {{ $store.getters.totalChanged | currency }}
        <router-link :to="{ name: 'Disclaimer'}">
          *
        </router-link>
      </div>
      <div class="is-size-4">
    <span class="has-sign"
          v-bind:class="$store.getters.totalChanged - $store.state.amount > 0 ? 'positive' : 'negative'">
    {{$store.getters.totalChanged - $store.state.amount | currency}},
    </span>
        <span class="has-sign" v-bind:class="$store.getters.totalChangedPercent > 0 ? 'positive' : 'negative'">
    {{ $store.getters.totalChangedPercent | percentage }}
    </span>
      </div>
    </div>

    <div class="center">
      <table class="table is-hoverable">
        <thead>
        <th>
          Holdings Type
        </th>
        <th>
          ETF Symbol
        </th>
        <th>
          ETF 1 Year Change %
        </th>
        <th>
          <abbr title="Percentage amount of your total allocation used for this ETF">
            Allocation %
          </abbr>
        </th>
        <th>
          <abbr title="Dollar amount of your total allocation used for this ETF">
            Allocation $
          </abbr>
        </th>
        <th>
          <abbr title="Dollar amount your allocation changed for this ETF">
            1 Year Change $
          </abbr>
        </th>
        <th>
          <abbr title="Percentage amount your allocation changed for this ETF">
            1 Year Change %
          </abbr>
        </th>
        </thead>
        <tbody>
        <PortfolioItem label="Large Company Stocks" symbol='VOO'
                       :portfolioType="$store.state.selectedPortfolioType"
                       :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Small Company Stocks" symbol='VB'
                       :portfolioType="$store.state.selectedPortfolioType"
                       :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Emerging Market Stocks" symbol='VWO'
                       :portfolioType="$store.state.selectedPortfolioType"
                       :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Real Estate Stocks" symbol='VNQ' :portfolioType="$store.state.selectedPortfolioType"
                       :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Government Bonds" symbol='SHY' :portfolioType="$store.state.selectedPortfolioType"
                       :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Corporate Bonds" symbol='LQD' :portfolioType="$store.state.selectedPortfolioType"
                       :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        <PortfolioItem label="Intl Large Company Stocks" symbol='VEA'
                       :portfolioType="$store.state.selectedPortfolioType"
                       :amount="$store.state.amount" :portfolios="$store.state.portfolios"></PortfolioItem>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <progress class="progress is-large" value="60" max="100">60%</progress>
  </div>
</template>

<script>
import numeral from 'numeral'
import PortfolioItem from '@/components/PortfolioItem'

import { getData } from '../utils/api'
import { acornsPortfolio } from '../utils/acorns'
export default {
  name: 'Calulator',
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
  },
  filters: {
    currency (value) {
      return numeral(value).format('$0,0.00')
    },
    percentage (value) {
      return numeral(value).format('0.00%')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.positive {
  color: green;
}
.positive.has-sign:before {
  content: '+'
}
.negative {
  color: red
}
.negative.has-sign:before {
  content: '-'
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.results {
  padding: 1em;
}
.portfolios {
  padding: 1em;
}
.field {
  padding: .5em;
}
</style>
