import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '@/layouts/LayoutFull.vue';
import PessoaView from '@/views/PessoaView.vue'
import RegistroView from '@/views/RegistroView.vue'
import MoradiaView from '@/views/MoradiaView.vue'
import AnimalView from '@/views/AnimalView.vue'
import InicioView from '@/views/InicioView.vue'
import LoginView from '@/views/LoginView.vue'

import { useTemplateStore } from '@/stores/template';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '/Pessoa',
          name: 'Pessoa',
          component: PessoaView,
          meta: {
            title: "Pessoa"
          }
        },
        {
          path: '/Registro',
          name: 'Registro',
          component: RegistroView,
          meta: {
            title: "Registro"
          }
        },{
          path: '/Moradia',
          name: 'Moradia',
          component: MoradiaView,
          meta: {
            title: "Moradia"
          }
        },{
          path: '/Animal',
          name: 'Animal',
          component: AnimalView,
          meta: {
            title: "Animal"
          }
        },
        {
          path: '/',
          name: 'Inicio',
          component: InicioView,
          meta: {
            title: "Inicio"
          }
        }, 
        {
          path: '/Login',
          name: 'Login',
          component: LoginView,
          meta: {
            title: "Login"
          }
        }
      ],
    },
  ],
});

router.afterEach((to) => {
  const templateStore = useTemplateStore()
  templateStore.setTitle(to.meta?.title || '')

})

export default router;
