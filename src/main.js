import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'
import index from './components/index.vue'
import list from './components/list.vue'
import article from './components/article.vue'
import foot from "./components/footer"
import head from "./components/header"

Vue.use(VueRouter)

var Root = Vue.extend({
    components: {
          foot: foot,
          headBanner: head
      }
})
var Router = new VueRouter({
  history: true
})

Router.map({
    '/': {
      component: index 
    },
    '/list/:page_num': {
      component: list
    },
    '/document/:doc_id': {
      component: article
    }
})

Router.redirect({
  '*': '/'    
  // 这个貌似是在碰到不匹配的路径的时候，就转到指定的地址（因为是*）。……反正是重定向= =
})

Router.start(Root, 'body')
