import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimulatorHomeView from '@/views/SimulatorHomeView.vue'
import SimulatorSettingsView from '@/views/SimulatorSettingsView.vue'
import SimulatorGameView from '@/views/SimulatorGameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/simulator',
      name: 'simulator',
      children: [
        {
          path: '',
          name: 'simulator-home',
          component: SimulatorHomeView
        },
        {
          path: 'settings',
          name: 'simulator-settings',
          component: SimulatorSettingsView
        },
        {
          path: 'game',
          name: 'simulator-game',
          component: SimulatorGameView
        }
      ]
    }
  ]
})

export default router
