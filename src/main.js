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
import { faPlus, faXmark , faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

// Import Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import VueQuillEditor for Vue 3
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// Add icons to the library
library.add(faPlus, faXmark, faPhone, faEnvelope);

const app = createApp(App)

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Register QuillEditor globally
app.component('QuillEditor', QuillEditor);

app.use(store)
app.use(router)

app.mount('#app')
