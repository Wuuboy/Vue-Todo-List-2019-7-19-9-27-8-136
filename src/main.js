import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ToDoList from './components/ToDoList.vue'
import Main from './components/Main.vue'

const routes = [
  {path:'/',component:Main},
  {path:'/ToDoList',component:ToDoList}
]

const router  = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

