import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
   // { path: '/login', component: HomeHeader } 
  ]
});

export default router;