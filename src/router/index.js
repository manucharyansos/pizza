import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index-views'
import EditPage from '../views/edit/index-views'
import Login from '../views/auth/login/index-views'
import CategoriesView from "@/views/categories/index-views";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditPage
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/categories',
    name: '/categories',
    component: CategoriesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
