
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('swiper/dist/css/swiper.css')

window.Vue = require('vue')

import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

// import Home from './components/app'
import Detail from './components/detail'
import Home from './components/middle'
import Blog from './components/blog'
import Project from './components/project'
import Think from './components/think'
import About from './components/about'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/project',
        component: Project
    },
    {
        path: '/think',
        component: Think
    },
    {
        path: '/about',
        component: About
    },
]

const router = new VueRouter({
    routes
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./components/app.vue'));

const app = new Vue({
    el: '#app',
    router
});
