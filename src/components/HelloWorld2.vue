<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link  v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.name">
      {{tag.name}}
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '2页面',
      visitedViews:[{name:'孩子',path:'/hi'},{name:'动态路由孩子',path:'/hi1'}]
    }
  },
  created: function() {
     // this.$router.push({ path: "/2" });//当前组件跳转，而不是这里定义的子页面跳转
    //当前组件跳转
    // this.$router.addRoutes([{
    //   path: '/hi1',
    //   component: (resolve) => require(['./HelloWorld2Child1.vue'], resolve)
    // }]);
    this.$router.addRoutes([{
      path: '/2',
      component: (resolve) => require(['./HelloWorld2'], resolve),
      children:[
        // { path: '/hi', component: (resolve) => require(['./HelloWorld2Child'], resolve)},
        { path: '/hi1', component: (resolve) => require(['./HelloWorld2Child1'], resolve)}
      ]
    }]);
    console.log('已知路由',this.$router);//打印路由不包含新增的
    this.$router.push({ path: "/hi1" });
  }
}
</script>

<style scoped>

</style>
