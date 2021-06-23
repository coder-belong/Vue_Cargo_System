import Vue from 'vue';
import Router from 'vue-router';

import layout from '@/views/layout/layout.vue';
// import treeRoute from '@/views/layout/router.vue';

import { findCargo } from '../api/cargo/find_cargo'

import { Message } from 'element-ui';

Vue.use(Router);
export default new Router({
    // mode:'history',
    routes: [
        //首页
        {
            path: '/',
            redirect: '/login',
            name: 'index',
            visible: false,
            component: layout,
            meta: {
                title: 'home',
                keepAlive: false
            }
        },
        // 仪表盘
        {
            path: '/dashboard',
            visible: true,
            component: layout,
            meta: {
                title: '首页',
                icon: 'mdi-gauge',
                keepAlive: false
            },
            // 进入后台管理页面之前判断token是否过期
            async beforeEnter(to, from, next) {
                // let token = localStorage.getItem('token')
                let { meta } = await findCargo()
                if (meta.status === 401) {
                    Message({
                        showClose: true,
                        message: '暂无访问权限，请登录',
                        type: 'error',
                        center: true
                    });
                    return next('/login')
                } else {
                    next()
                }
            },
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    meta: {
                        title: '数据分析',
                        icon: 'mdi-gauge',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
                },
            ]
        },
        // 任务
        {
            path: '/tasks',
            visible: true,
            component: layout,
            meta: {
                title: '任务管理',
                icon: 'mdi-checkbox-multiple-marked-circle',
                keepAlive: false
            },
            children: [
                {
                    path: '',
                    name: 'myTask',
                    meta: {
                        title: '任务清单',
                        icon: 'mdi-alpha-t',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "myTask" */ '@/views/task/index.vue')
                }
            ]
        },

        // 订单管理
        {
            path: '/order',
            visible: true,
            redirect: '/order',
            component: layout,
            meta: {
                title: '订单管理',
                icon: 'mdi-view-comfy',
                keepAlive: false
            },
            children: [
                {
                    path: '/order',
                    name: '订单管理',
                    meta: {
                        title: '订单管理',
                        icon: 'mdi-map-marker-radius',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "map" */ '@/views/order/Order.vue')
                },
            ]
        },
        // 货物管理
        {
            path: '/cargo',
            visible: true,
            redirect: '/cargo',
            component: layout,
            meta: {
                title: '货物管理',
                icon: 'mdi-view-comfy',
                keepAlive: false
            },
            children: [
                {
                    path: '/cargo',
                    name: '货物管理',
                    meta: {
                        title: '货物管理',
                        icon: 'mdi-view-comfy',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "map" */ '@/views/cargo/Cargo.vue')
                },
            ]
        },
        // 设备管理
        {
            path: '/facility',
            visible: true,
            redirect: '/facility',
            component: layout,
            meta: {
                title: '设备管理',
                icon: 'mdi-view-comfy',
                keepAlive: false
            },
            children: [
                {
                    path: '/facility',
                    name: '设备管理',
                    meta: {
                        title: '设备管理',
                        icon: 'mdi-view-comfy',
                        keepAlive: false
                    },
                    component: () => import('@/views/facility/Facility.vue')
                },
            ]
        },
        // 组件
        // {
        //     path: '/components',
        //     visible: true,
        //     redirect: '/components/table',
        //     component: layout,
        //     meta: {
        //         title: 'components',
        //         icon: 'mdi-view-comfy',
        //         keepAlive: false
        //     },
        //     children: [
        //         {
        //             path: 'widgets',
        //             name: 'widget',
        //             meta: {
        //                 title: 'widgets',
        //                 icon: 'mdi-alpha-w',
        //                 keepAlive: false
        //             },
        //             component: () => import(/* webpackChunkName: "table" */ '@/views/components/widget.vue')
        //         },
        //         {
        //             path: 'sparklines',
        //             name: 'sparklines',
        //             meta: {
        //                 title: 'Sparklines',
        //                 icon: 'mdi-alpha-s',
        //                 keepAlive: false
        //             },
        //             component: () => import(/* webpackChunkName: "charts" */ '@/views/components/sparklines.vue')
        //         },
        //         {
        //             path: 'form',
        //             name: 'form',
        //             meta: {
        //                 title: 'form',
        //                 icon: 'mdi-alpha-f',
        //                 keepAlive: false
        //             },
        //             component: () => import(/* webpackChunkName: "charts" */ '@/views/components/form.vue')
        //         },
        //         {
        //             path: 'table',
        //             name: 'starTask',
        //             meta: {
        //                 title: 'table',
        //                 icon: 'mdi-alpha-t',
        //                 keepAlive: false
        //             },
        //             component: () => import(/* webpackChunkName: "starTask" */ '@/views/components/table.vue')
        //         }
        //     ]
        // },
        // 地图
        {
            path: '/map',
            visible: true,
            redirect: '/map',
            component: layout,
            meta: {
                title: '货物分布地址',
                icon: 'mdi-map-marker-radius',
                keepAlive: false
            },
            children: [
                {
                    path: '/map',
                    name: 'map',
                    meta: {
                        title: '货物分布地址',
                        icon: 'mdi-map-marker-radius',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "map" */ '@/views/map/index.vue')
                },
            ]
        },
        // 流程图
        {
            path: '/flow-editor',
            visible: true,
            component: layout,
            meta: {
                title: '市场营销战略',
                icon: 'mdi-vector-triangle',
                keepAlive: false
            },
            children: [
                {
                    path: '/flow-editor',
                    name: 'FlowEditor',
                    meta: {
                        title: '流程图自定义',
                        icon: 'mdi-vector-triangle',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "flowchart" */ '@/views/flowchart/index.vue')
                }
            ]
        },
        // 测试页面缓存
        // {
        //     path: '/keep-alive',
        //     visible: true,
        //     component: layout,
        //     meta: {
        //         title: 'keepAlive',
        //         icon: 'mdi-archive-arrow-down-outline',
        //         keepAlive: false
        //     },
        //     children: [
        //         {
        //             path: '/keep-alive',
        //             name: 'keepAlive',
        //             meta: {
        //                 title: 'Keep Alive',
        //                 strategy: 'keep', // keep,  refresh
        //                 keepAlive: true
        //             },
        //             component: () => import(/* webpackChunkName: "keepAlive" */ '@/views/keep-alive/index.vue'),
        //         }
        //     ]
        // },
        // 测试离开缓存页面
        // {
        //     path: '/keep-alive',
        //     visible: false,
        //     component: layout,
        //     meta: {
        //         title: 'keepAlive',
        //         icon: 'mdi-archive-arrow-down-outline',
        //         keepAlive: false
        //     },
        //     children: [
        //         {
        //             path: ':id',
        //             name: 'ddddd',
        //             meta: {
        //                 title: 'Keep Alive',
        //                 icon: '',
        //                 keepAlive: false
        //             },
        //             component: () => import(/* webpackChunkName: "widget22" */ '@/views/keep-alive/inner.vue')
        //         }
        //     ]
        // },
        // 登录页面
        {
            path: '/login',
            name: 'login',
            visible: true,
            meta: {
                title: '登录页面',
                icon: 'mdi-fingerprint',
                keepAlive: false
            },
            component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
        },


        // 注册页面
        {
            path: '/register',
            name: 'register',
            visible: false,
            meta: {
                title: '注册页面',
                icon: 'mdi-fingerprint',
                keepAlive: false
            },
            component: () => import('@/views/register/Register.vue')
        },
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    // }
});

