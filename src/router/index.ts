import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/app', component: Layout,
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
      },
      {
        path: 'dinamic',
        name: 'Dinamic',
        component: () => import('@/views/DinamicView.vue')
      },
      {
        path: 'circlePackChart',
        name: 'CirclePackChart',
        component: () => import('@/views/CirclePackChart.vue')
      }
    ],
    meta: { requiresLogin: true }
  },
  {
    path: '',
    redirect: 'home'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!!store.getters.getToken && !store.getters.getAuthenticated) {
    store
      .dispatch("login", store.getters.getToken)
      .then(() => {
        next();
      })
      .catch(() => {
        store.dispatch('logout');
        next("/login");
      });
  } else if (to.matched.some(record => record.meta.requiresLogin) && !store.getters.getAuthenticated) {
    next("/login")
  } else {
    next()
  }
})

export default router
