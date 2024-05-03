import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
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
      path: '/legend', 
      component: Legend,
      meta: { 
        requiresAuth: true
      }
    }
  ],
  history: createWebHistory(process.env.BASE_URL)
})
router.beforeEach((to, from, next) => {

  //store.dispatch('logout')
  if(to.meta.requiresAuth){
    if(!store.getters.isLoggedIn){
      next('/login')
      return
    }
    next()
    return
  }
  next()
})
export default router