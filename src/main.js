import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // This includes Popper.js

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
