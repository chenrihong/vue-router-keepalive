import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import demoComp from '../libs/demo'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        meta: {
            keepalive: true
        }
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
                meta: {
                    keepalive: true
                },
                children: [
                    {
                        path: '/sub01',
                        name: 'sub01',
                        component: () => import('../views/sub01.vue'),
                        meta: {
                            keepalive: true
                        }
                    },
                    {
                        path: '/sub02',
                        name: 'sub02',
                        component: () => import('../views/sub02.vue'),
                        children: [
                            {
                                path: '/sub02/sub0201',
                                name: 'sub02sub0201',
                                component: () => import('../views/sub02sub0201.vue'),
                                meta: {
                                    keepalive: true
                                }
                            },
                            {
                                path: '/sub02/sub0202',
                                name: 'sub02sub0202',
                                component: () => import('../views/sub02sub0202.vue'),
                                meta: {
                                    keepalive: true
                                }
                            }
                        ]
                    },
                    {
                        path: '/sub03',
                        name: 'sub03',
                        component: () => import('../views/sub03.vue'),
                        meta: {
                            keepalive: true
                        }
                    },
                    {
                        path: '/demo',
                        name: 'demo',
                        component: () => demoComp('demo', 'abc'),
                        meta: {
                            keepalive: true
                        }
                    },
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