import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld1 from '@/components/HelloWorld1.vue'
import HelloWorld2 from '@/components/HelloWorld2.vue'
import HelloWorld2Child from '@/components/HelloWorld2Child.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/1',
      component: HelloWorld1
    },{
      path: '/2',
      component: HelloWorld2,
      children:[
        { path: '/hi', component: HelloWorld2Child}
      ]
    }
  ]
})
