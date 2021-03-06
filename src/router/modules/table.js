/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
    path: '/table',
    component: Layout,
    redirect: '/table/inline-edit-table',
    name: 'Table',
    meta: {
        title: 'Table',
        icon: 'table'
    },
    children: [
        {
            path: 'inline-edit-table',
            component: () => import('@/views/table/inline-edit-table'),
            name: 'InlineEditTable',
            meta: { title: 'Inline Edit' }
        },
        {
            path: 'complex-table',
            component: () => import('@/views/table/complex-table'),
            name: 'ComplexTable',
            meta: { title: 'Complex Table' }
        }
    ]
}
export default tableRouter
