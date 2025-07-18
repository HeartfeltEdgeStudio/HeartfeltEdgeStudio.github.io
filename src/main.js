/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { createHead } from '@vueuse/head';

import OverlaySignupPopup from "@/components/OverlaySignupPopup.vue";

const app = createApp(App)

const head = createHead();

registerPlugins(app)

app.mount('#app')

app.component("OverlaySignupPopup", OverlaySignupPopup);
