import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import { projectAuth, projectFirestore } from './firebase/config'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // This includes Popper.js
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)

app.config.globalProperties.$firestore = projectFirestore

app.use(store)
app.use(router)
app.mount('#app')
