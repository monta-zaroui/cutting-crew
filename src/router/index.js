import HeroSection from '../components/hero-section/hero-section.vue'
import LandingPage from '../components/landing-page/landing-page.vue'
import Articles from '../components/articles/articles.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: HeroSection,
        children: [
            {
                path: '',
                name: 'landingPage',
                component: LandingPage,
            },
            {
                path: 'articles',
                name: 'articles',
                component: Articles,
            }
        ]
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
