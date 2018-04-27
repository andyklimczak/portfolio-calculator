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
    this.$emit('setValue', this.symbol, this.amountChanged)
  },
  computed: {
    amountChanged () {
      const change = this.amountAllocated * this.percentChanged
      return this.percentChanged > 0 ? this.amountAllocated + change : this.amountAllocated - change
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
