import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('../views/index/index')
const Admin = () => import('../views/admin/admin')
const Order = () => import('../views/admin/order/order')
const Adress = () => import('../views/admin/adress/adress')
const Cart = () => import('../views/cart/cart')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/gyxkiss/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/gyxkiss/user',
      name: 'Admin',
      component: Admin,
      children: [
        // 订单管理
        {
          path:'order',
          name:'Order',
          component: Order
        },
        // 地址管理
        {
          path:'adress',
          name:'Adress',
          component: Adress
        },
      ]
    },
    {
      path: '/gyxkiss/cart',
      name:'Cart',
      component: Cart
    }
  ]
})
