import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import menu from '../views/Menu.vue'
import detail from '../views/Menudetail.vue'
import keranjang from '../views/Keranjang.vue'
import Sukses from '../views/PesananSukses.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component:menu
  },
  {
    path: '/menu/:id',
    name: 'detail',
    component:detail
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component:keranjang
  },
  {
    path: '/pesanan-sukses',
    name: 'pesanan-sukses',
    component:Sukses
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
