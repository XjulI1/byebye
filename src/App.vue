<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Polygramme</router-link>
      |
      <router-link to="/about">À propos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    max-width: 500px;
    margin: auto;
    margin-bottom: 50px;
  }

  #nav {
    padding: 20px;

    a {
      font-weight: bold;
      color: #2c3e50;

      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
