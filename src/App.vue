<template>
  <div id="app">
    <CNavbar></CNavbar>
    <br>
    <br>
    <!--<nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/club">CLUBS</router-link> 
      <router-link to="/about">About</router-link>
    </nav>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #5cb85c;
}
</style>
<script>
import CNavbar from './components/navbar.vue'

  export default {
    name: 'App',
    components: {
      CNavbar,
    }
  }
</script>

