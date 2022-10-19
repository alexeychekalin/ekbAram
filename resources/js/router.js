import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../../resources/js/components/Login'),
            meta:{
                layout: 'empty',
                middleware:"guest",
                title:`Login`
            }
        },
        {
            path: '/',
            name: 'dashboard',
            component: () => import('../../resources/js/components/pages/AllOrders'),
            meta:{
                layout: 'main',
                middleware:"auth",
                //admin: true
            }
        },
        {
            path: '/newuser',
            name: 'newuser',
            component: () => import('../../resources/js/components/pages/NewUser'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('../../resources/js/components/pages/AllUser'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/newparts',
            name: 'newparts',
            component: () => import('../../resources/js/components/pages/NewParts'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/parts',
            name: 'parts',
            component: () => import('../../resources/js/components/pages/AllParts'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/newprovider',
            name: 'newprovider',
            component: () => import('../../resources/js/components/pages/NewProvider'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/provider',
            name: 'provider',
            component: () => import('../../resources/js/components/pages/AllProvider'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/newclients',
            name: 'newclients',
            component: () => import('../../resources/js/components/pages/NewClients'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/clients',
            name: 'clients',
            component: () => import('../../resources/js/components/pages/AllClients'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../../resources/js/components/pages/About'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: true
            }
        },
        {
            path: '/neworder',
            name: 'neworder',
            component: () => import('../../resources/js/components/pages/NewOrder'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: false
            }
        },
        {
            path: '/edit',
            name: 'edit',
            component: () => import('../../resources/js/components/pages/EditOrder'),
            meta:{
                layout: 'main',
                middleware:"auth",
                admin: false
            }
        }
    ]
})


