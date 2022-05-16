import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import tableRouter from "@/router/modules/table";

//全用户权限都显示
export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true

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
                meta: {title: 'Dashboard', icon: 'dashboard', affix: true}
            }
        ]
    },
    {
        path: '/guide',
        component: Layout,
        redirect: '/guide/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/guide/index'),
                name: 'Guide',
                meta: {title: 'Guide', icon: 'guide', noCache: true}
            }
        ]
    },
    tableRouter,
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

]

const router = new Router({
    routes: constantRoutes,
})

export default router
