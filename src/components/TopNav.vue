<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'Calculator'}" class="navbar-item">
        Calculator
      </router-link>
      <router-link :to="{ name: 'Disclaimer'}" class="navbar-item">
        Disclaimer
      </router-link>
      <router-link :to="{ name: 'About'}" class="navbar-item">
        About
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  font-family: Tahoma, Geneva, sans-serif;
  background-color: #d5dbdb;
}
</style>
