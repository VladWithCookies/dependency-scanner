import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import routes from './constants/routes';
import App from './App.vue';

const app = createApp(App);

// Icons need to be registered before using with Element Plus
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

const history = createWebHistory();
const router = createRouter({ routes, history });

app.use(router);
app.mount('#app');
