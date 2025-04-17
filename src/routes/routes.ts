import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import OsDetails from '@/view/OsDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
   { path: '/os-detail', component: OsDetails } 
  ]
});

export default router;