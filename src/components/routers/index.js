import { createRouter, createWebHashHistory } from 'vue-router'
import IndexHome from '../homeComponent/indexHome.vue'
import IndexDetail from '../detailComponent/indexDetail.vue'
import IndexCart from '../cartComponent/indexCart.vue'
import IndexCheckOut from '../checkoutComponent/IndexcheckOut.vue'


const routes = [
    {
        path: '/',
        component: IndexHome,
        name: "home-page"
    },
    {
        path: '/product-detail/:id',
        component: IndexDetail,
        name: "product-detail"
    },
    {
        path: '/:pathMatch(.*)*',
        component: IndexHome,
        name: "cart-page"

    },
    {
        path: '/shopping-cart',
        component: IndexCart,
        name: "Home-page"
    },
    {
        path: '/check-out',
        component: IndexCheckOut,
        name: "Check-out"
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router