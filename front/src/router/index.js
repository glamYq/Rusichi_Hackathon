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
      component: Main,
      meta: { 
        requiresAuth: true
      }
    },
    { 
      path: '/about', 
      component: About,
      meta: { 
        requiresAuth: true
      }
    },
    { 
      path: '/profile', 
      component: Profile,
      meta: { 
        requiresAuth: true
      }
    },
    { 
      path: '/contacts', 
      component: Contacts,
      meta: { 
        requiresAuth: true
      }
    }
  ],
  history: createWebHistory(process.env.BASE_URL)
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
export default router