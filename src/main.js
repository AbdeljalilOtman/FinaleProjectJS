import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // This includes Popper.js
import 'bootstrap-icons/font/bootstrap-icons.css';

import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Import Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

library.add(faPlus, faXmark);



const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store)
app.use(router)
app.use(VueQuillEditor)

app.mount('#app')
