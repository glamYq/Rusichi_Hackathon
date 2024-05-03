import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import store from '@/store/store'
import Legend from '../views/Legend.vue'

const router = createRouter({
  routes: [
    { 
      path: '/login', 
      component: Login
    },
    { 
      path: '/main',
      alias: '/', 
      component: Main,
      meta: { 
       requiresAuth: false
       }
    },
    { 
      path: '/about', 
      component: About,
       meta: { 
         requiresAuth: false
       }
    },
    { 
      path: '/profile', 
      component: Profile,
       meta: { 
         requiresAuth: false
       }
    },
    { 
      path: '/contacts', 
      component: Contacts,
      meta: { 
        requiresAuth: false
      }
    },
    { 
      path: '/legend', 
      component: Legend,
      meta: { 
        requiresAuth: false
      }
    }
  ],
  history: createWebHistory(process.env.BASE_URL)
})
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    if(!store.getters.isLoggedIn){
      next('/login')
      return
    }
    next()
    return
  }
  next()
  return
})
export default router