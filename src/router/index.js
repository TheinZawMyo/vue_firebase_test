import Vue from 'vue'
import VueRouter from 'vue-router'
import UserCreate from '../components/UserCreate'
import UserList from '../components/UserList'
import UserEdit from '../components/UserEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'add',
    component : UserCreate
    // component: () => import('../components/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    component : UserList
    // component: () => import('../components/UserList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component : UserEdit
    // component: () => import('../components/UserEdit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router