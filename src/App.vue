<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <NavBar />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  transition: all 0.4s;
}

main {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  padding: 64px 10vw 96px 10vw;
  box-sizing: border-box;
  scrollbar-width: none; // firefox
}

main::-webkit-scrollbar {
  width: 0px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
