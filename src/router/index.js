import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '../views/BlogsView.vue'
import BlogDetailsView from '../views/BlogDetailsView.vue'
import NotFound from '../views/NotFound.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path:'/blogs/details/:id',
    name:'blog_details',
    component: BlogDetailsView,
    props: true
  },
  {
    path: '/signup',
    name:'SignUpView',
    component:SignUpView
  },
  {
    path: '/signin',
    name:'SignInView',
    component:SignInView
  },
  {
    path: '/users',
    name:'UserView',
    component:UserView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
