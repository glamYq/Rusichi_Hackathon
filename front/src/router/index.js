import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  routes: [
    { 
      path: '/login', 
      component: Login
    },
    { 
      path: '/', 
      component: Main,
    }
  ],
  history: createWebHistory(process.env.BASE_URL)
})

export default router