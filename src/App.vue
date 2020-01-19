<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  name: 'AfterLifeJazz',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 100px, 150px;
  }

  body {
    background-image: url("./assets/biggreen.jpg");
    background-color: rgb(43, 75, 45);
  }

  h1 {
    font-size: 30px;
    color: white;
  }

  button {
    background: gray;
    color: #fff;
  }
</style>
