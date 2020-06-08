import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from '../views/Menu'
import Scorecard from '../views/Scorecard'
import Login from '../views/Login'
import SignUp from "../views/SignUp";

Vue.use(VueRouter)

  const routes = [
    {path: '/', component: Menu},
    {path: '/login', component: Login},
    {path: '/scorecard', component: Scorecard},
    {path: '/signup', component: SignUp}
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
