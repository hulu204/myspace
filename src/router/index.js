import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import RegesterView from '../views/RegesterView.vue'
import UserList from '../views/UserListView.vue'
import UserProfile from '../views/UserProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/regester',
    name: 'regester',
    component: RegesterView
  },
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
