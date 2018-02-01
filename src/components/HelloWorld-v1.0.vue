<template>
  <div class="hello">
    你好v1.0
    <img src="@/assets/logo.png"/>
    <img src="~static/logo.png"/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '你好v1.0'
    }
  }
}
</script>

<style scoped>

</style>
