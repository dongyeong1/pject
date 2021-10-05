import Vue from 'vue'
import VueRouter from 'vue-router'
import Dong from '../views/Dong'

Vue.use(VueRouter)

const routes=[
   
    {
        path:'/dong',
        name:Dong,
        component:Dong,
    }
]
const router = new VueRouter({
    MODE:'history',
    routes
})

export default router