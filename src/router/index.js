import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import Dashboard from '../views/Dashboard.vue'
import Aboutme from '../views/Aboutme.vue'
import vuetify from '../views/Vuetify.vue'
import AxiosDemo from '../views/AxiosDemo.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: vuetify
      },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme
      },
      {
        path: '/AxiosDemo',
        name: 'AxiosDemo',
        component: AxiosDemo
        },
  ]
})

export default router
