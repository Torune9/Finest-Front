import LoginViews from '../views/auth/LoginViews.vue'
import RegisterViews from '../views/auth/RegisterView.vue'

const routes = [
    {
        path :'/',
        alias : '/signin',
        name : 'login',
        component :  LoginViews
    },
    {
        path :'/register',
        alias : '/signup',
        name: 'register',
        component :  RegisterViews
    }
]

export default routes