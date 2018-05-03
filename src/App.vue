<template>
  <div id="app">
    <TopNav></TopNav>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
export default {
  name: 'App',
  components: {TopNav}
}
</script>

<style>
#app {
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  background-color: #eaeded
}
</style>
