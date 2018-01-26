<template>
  <div class="hello">
    你好
    <img src="@/assets/logo.png"/>
    <img src="~static/logo.png"/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
