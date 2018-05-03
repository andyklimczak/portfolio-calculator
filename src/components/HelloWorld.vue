<template>
  <div>
    <TopNav></TopNav>
    <Calculator></Calculator>
  </div>
</template>

<script>
import Calculator from './Calculator'
import TopNav from './TopNav'
export default {
  name: 'HelloWorld',
  components: {Calculator, TopNav}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
