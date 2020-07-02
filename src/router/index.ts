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
  if (!!store.getters.getToken && store.state.user.authenticated == false) {
    store
      .dispatch("login", store.getters.getToken)
      .then(() => {
        next();
      })
      .catch(() => {
        store.state.user.token = "";
        next("/login");
      });
  } else if (to.matched.some(record => record.meta.requiresLogin) && store.state.user.authenticated == false) {
    next("/login")
  } else {
    next()
  }
})

export default router
