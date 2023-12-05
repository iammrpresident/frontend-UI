import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import AuthLayout from '../components/layouts/AuthLayout.vue'
import Homepage from '../views/Homepage.vue'
import Register from '../views/authView/Register.vue'
import Login from '../views/authView/Login.vue'
import DashboardLayout from '../components/layouts/DashboardLayout.vue'  
import Dashboard from '../views/Dashboard/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: Homepage },
    ],
  },
  {
    path: '/accounts',
    component: AuthLayout,
    children: [
      { path: 'register', component: Register },
      { path: 'login', component: Login },
    ],
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      { path: '', component: Dashboard },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
