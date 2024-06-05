import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FeaturedItems from './components/FeaturedItems.vue'

const app = createApp(App)

app.use(router)

app.component('featured-items', FeaturedItems)

app.mount('#app')
