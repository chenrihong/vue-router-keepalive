import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import { useStore } from './store/store'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

const store = useStore();
router.beforeEach((to, from, next) => {

    if (store.openedPages.includes(to.fullPath)) {

    }

    next();
})


app.mount('#app')