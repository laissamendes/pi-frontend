import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '@/layouts/LayoutFull.vue';
import PessoaView from '@/views/PessoaView.vue'
import RegistroView from '@/views/RegistroView.vue'
import MoradiaView from '@/views/MoradiaView.vue'
import AnimalView from '@/views/AnimalView.vue'
import InicioView from '@/views/InicioView.vue'

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
        },
        {
          path: '/Registro',
          name: 'Registro',
          component: RegistroView,
        },{
          path: '/Moradia',
          name: 'Moradia',
          component: MoradiaView,
        },{
          path: '/Animal',
          name: 'Animal',
          component: AnimalView,
        },
        {
          path: '/Inicio',
          name: 'Inicio',
          component: InicioView,
        }
      ],
    },
  ],
});

export default router;
