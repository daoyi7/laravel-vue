
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/app.vue'

const routes = [
    {
        path: '/',
        component: Home
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
