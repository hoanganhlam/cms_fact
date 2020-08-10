import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _239856cc = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _79e26bee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _833e53f0 = () => interopDefault(import('../pages/_term/_taxonomy.vue' /* webpackChunkName: "pages/_term/_taxonomy" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/posts/:id?",
    component: _239856cc,
    name: "posts-id"
  }, {
    path: "/",
    component: _79e26bee,
    name: "index"
  }, {
    path: "/:term/:taxonomy?",
    component: _833e53f0,
    name: "term-taxonomy"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
