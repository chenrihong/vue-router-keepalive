import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/homelayout.vue'),
        children: [
            {
                path: '/layout01',
                name: 'layout01',
                component: () => import('../views/layout01.vue'),
                children: [
                    {
                        path: '/sub01',
                        name: 'sub01',
                        component: () => import('../views/sub01.vue'),
                    },
                    {
                        path: '/sub02',
                        name: 'sub02',
                        component: () => import('../views/sub02.vue'),
                        children: [
                            {
                                path: '/sub02/sub0201',
                                name: 'sub02sub0201',
                                component: () => import('../views/sub0201.vue'),
                            }
                        ]
                    },
                    {
                        path: '/sub03',
                        name: 'sub03',
                        component: () => import('../views/sub03.vue'),
                    }
                ]
            },
        ],
    },
    {
        path: '/:catchAll(.*)',
        redirect: {
            name: '404',
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router