import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import VIcon from 'vue-tailwind-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import { createI18n } from 'vue-i18n';
import {language} from "@/i18n";
import {defaultlocal} from "@/i18n";

const messages = Object.assign(language)

const i18n = createI18n({
    legacy: false,
    locale: defaultlocal,
    fallbackLocale: 'en',
    messages
})


createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(VIcon, { set: 'outline' })
    .use(i18n)
    .mount('#app')
