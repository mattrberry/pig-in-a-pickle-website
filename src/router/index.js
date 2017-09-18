import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Catering from '@/components/Catering'
import Delivery from '@/components/Delivery'
import FindUs from '@/components/FindUs'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Success from '@/components/Success'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/catering',
      name: 'Catering',
      component: Catering
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/findus',
      name: 'Find Us',
      component: FindUs
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
