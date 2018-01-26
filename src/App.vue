<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <img src="~static/logo.png"/>
    <router-link  v-for="tag in visitedViews" :to="tag.path" :key="tag.name">
      {{tag.name}}
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      visitedViews:[{name:'菜单1',path:'/1'},{name:'菜单2',path:'/2'}]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
