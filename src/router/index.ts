import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/', component: Layout,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('../views/Table.vue')
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('../views/Form.vue')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../views/Users.vue')
      }
    ],
    meta: { requiresLogin: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && store.state.user.authenticated == false) {
    next("/login")
  } else {
    next()
  }
})

export default router
