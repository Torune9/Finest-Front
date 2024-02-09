import {createRouter,createWebHistory} from 'vue-router'
import LoginViews from '../views/auth/LoginViews.vue'
import routes from './routes'
const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
    
})
export default router