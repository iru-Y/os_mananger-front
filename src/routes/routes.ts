import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import HomeHeader from '@/view/HomeHeader.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: HomeView },
    { path: '/', component: HomeHeader } 
  ]
});

export default router;