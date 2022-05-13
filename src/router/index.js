import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

const router = new Router({
    routes: [
        {
            path: '/login',
            component: () => import('@/views/login/index'),
            // hidden: true

        },
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: 'dashboard',
                    component: () => import('@/views/dashboard/index'),
                    name: 'Dashboard',
                    // meta: {title: 'Dashboard', icon: 'dashboard', affix: true}
                }
            ]
        },
        {
            path:'/guide',
            component:Layout,
            redirect:'/guide/index',
            children:[
                {
                    path: 'index',
                    component: () => import('@/views/guide/index'),
                    name: 'Guide',
                    meta: { title: 'Guide', icon: 'guide', noCache: true }
                }
            ]
        }
    ]
})

export default router