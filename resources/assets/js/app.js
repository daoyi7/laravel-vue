/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('swiper/dist/css/swiper.css')

window.Vue = require('vue')

import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import axios from "axios"
import moment from "moment"
// import VueBlu from 'vue-blu'
// import 'vue-blu/dist/css/vue-blu.min.css'
// import 'flatpickr/dist/flatpickr.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.prototype.$http = axios
Vue.prototype.$moment = moment

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(iView)

import Home from './components/middle'
import Detail from './components/detail'
import Blog from './components/blog'
import Project from './components/project'
import Think from './components/think'
import About from './components/about'
import Edit from './components/Write/Edit'

const routes = [{
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
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
    {
        path: '/edit',
        component: Edit
    },
]

const router = new VueRouter({
    // mode: 'history',
    'linkActiveClass': 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./components/app.vue'));

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

const app = new Vue({
    el: '#app',
    router,
    // mounted() {
    //     this.init()
    // },
    // methods: {
    //     init() {
    //         document.addEventListener('visibilitychange', function() {
    //             let isHidden = document.hidden
    //             let _title = document.title
    //             console.log(_title)
    //
    //             if (isHidden) {
    //                 document.title = '离开了'
    //             } else {
    //                 document.title = _title
    //             }
    //         });
    //     }
    // }
});
