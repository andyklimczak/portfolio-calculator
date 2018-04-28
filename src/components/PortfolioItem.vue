<template>
  <div class="item">
    <div v-if="amountChanged > 0">
        {{ label }}
        {{ symbol }}
        {{ allocationPercentage }}
        {{ amountAllocated }}
        {{ percentChanged }}
        {{ amountChanged }}
    </div>
  </div>
</template>

<script>
import { acornsPortfolio } from '../utils/acorns'

export default {
  name: 'PortfolioItemContainer',
  props: [ 'label', 'symbol', 'portfolioType', 'amount', 'portfolios' ],
  data () {
    return {
    }
  },
  beforeUpdate () {
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
      return this.$props.portfolios[this.symbol].stats['year1ChangePercent']
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
