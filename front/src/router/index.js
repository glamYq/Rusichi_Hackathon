import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'

const router = createRouter({
  routes: [
    { 
      path: '/login', 
      component: Login
    },
    { 
      path: '/main', 
      component: Main
    },
    { 
      path: '/about', 
      component: About
    },
    { 
      path: '/profile', 
      component: Profile
    },
    { 
      path: '/contacts', 
      component: Contacts
    }
  ],
  history: createWebHistory(process.env.BASE_URL)
})

export default router