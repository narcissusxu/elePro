import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './assets/publicCss/PublicCss.css'

createApp(App).use(router).use(ViewUIPlus).mount('#app')
