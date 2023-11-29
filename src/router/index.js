import { createRouter, createWebHistory } from 'vue-router'
import RoupasView from '../views/RoupasView.vue'
import ClientesView from '../views/ClientesView.vue'
import FuncionariosView from '../views/FuncionariosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'roupas',
      component: RoupasView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    },
    {
      path: '/funcionarios',
      name: 'funcionarios',
      component: FuncionariosView
    }

  ]
})

export default router
