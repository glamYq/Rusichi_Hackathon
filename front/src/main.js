import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/store'
import components from '@/components'
import Axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(store)

app.config.globalProperties.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token
}

components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')