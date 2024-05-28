import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue } from 'bootstrap-vue'
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueAwesomeSwiper)
app.mount('#app')
