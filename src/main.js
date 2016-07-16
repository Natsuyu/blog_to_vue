import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'
import index from './components/index.vue'

Vue.use(VueRouter)

var Root = Vue.extend({})
var Router = new VueRouter()

Router.map({
    '/':{
      component: app
    }  
})

Router.redirect({
  '*': '/'
})

Router.start(Root, 'body')
