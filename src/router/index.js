import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import PortfolioShowcase from '@/views/PortfolioShowcase.vue';
import ContactPage from '@/views/ContactPage.vue';
import CreativePage from '@/views/CreativePage.vue';

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/portfolio/profile', component: ProfilePage },
    { path: '/portfolio/showcase', component: PortfolioShowcase },
    { path: '/portfolio/contact', component: ContactPage },
    { path: '/portfolio/creative', component: CreativePage },
    { path: '/', redirect: '/login' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
