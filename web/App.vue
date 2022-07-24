<template>
  <div id="app">
    <!-- <div class="container-fliud"> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>
<script>
// import Header from "./components/Header.vue";
export default {
  // components: { Header },
};
</script>
<style lang="scss">
@import "./assets/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 13px;
  // margin: 5rem;
}
</style>
