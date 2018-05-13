<template>
  <div class="columns">
    <div class="column is-offset-2 is-8">
      <p class="is-size-5">
        These calculations are extremely naive and simply split the allocated amount
        between the various ETFs and calculate the P/L for each time. The values provided are supposed
        to give a ball park estimate performance for each Acorns portfolio type for the given timeframe.
        <strong>The calculations do not take the Acorns fee, dividends, additional roundups
          or contributions, or any other magic or services Acorns provides its customers <em>into account in any way</em>.</strong> The
        calculations presented here will differ from the amount returned from Acorns for the given time period.
      </p>
      <p class="is-size-5">
        <strong>
          Past results do not guarantee future returns.
        </strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disclaimer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-bottom: 1em;
}
</style>
