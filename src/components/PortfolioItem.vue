<template>
  <tr>
    <td>
      {{ label }}
    </td>
    <td>
      <a :href="symbolLink">
      {{ symbol }}
      </a>
    </td>
    <td class="has-sign" v-bind:class="percentChanged > 0 ? 'positive' : 'negative'">
      {{ percentChanged | percentage }}
    </td>
    <td>
      {{ allocationPercentage | percentageShort }}
    </td>
    <td>
      {{ amountAllocated | currency }}
    </td>
    <td v-bind:class="amountChanged == amountAllocated ? '' : amountChanged > amountAllocated ? 'positive' : 'negative'">
      {{ amountChanged | currency }}
    </td>
    <td class="has-sign" v-bind:class="totalChange == 0 ? '' : totalChange > 0 ? 'positive' : 'negative'">
      {{ totalChange | currency }}
    </td>
  </tr>
</template>

<script>
import numeral from 'numeral'

import { acornsPortfolio } from '../utils/acorns'

export default {
  name: 'PortfolioItemContainer',
  props: [ 'label', 'symbol' ],
  data () {
    return {
    }
  },
  computed: {
    amountChanged () {
      const change = this.amountAllocated + (this.amountAllocated * this.percentChanged)
      this.$store.commit('setChangedValues', { key: this.symbol, value: change })
      return change
    },
    allocationPercentage () {
      return acornsPortfolio(this.portfolioType)[this.symbol]
    },
    amountAllocated () {
      return this.amount * this.allocationPercentage
    },
    percentChanged () {
      return this.portfolios[this.symbol].stats[`${this.period}ChangePercent`]
    },
    totalChange () {
      return this.amountChanged - this.amountAllocated
    },
    symbolLink () {
      return `https://www.barchart.com/etfs-funds/quotes/${this.symbol}`
    },
    portfolioType () {
      return this.$store.state.selectedPortfolioType
    },
    amount () {
      return this.$store.state.amount
    },
    portfolios () {
      return this.$store.state.portfolios
    },
    period () {
      return this.$store.state.selectedPeriod
    }
  },
  filters: {
    currency (value) {
      return numeral(Math.abs(value)).format('$0,0.00')
    },
    percentage (value) {
      return numeral(Math.abs(value)).format('0.00%')
    },
    percentageShort (value) {
      return numeral(Math.abs(value)).format('0%')
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
</style>
