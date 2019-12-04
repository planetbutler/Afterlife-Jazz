import Vue from 'vue';
import Router from 'vue-router';
import SignUp from './views/musician-entry';
import BookingTool from './views/bookingTool.vue';
import Trumpets from './views/trumpets.vue';
import Altos from './views/altos.vue';
import Tenors from './views/tenors.vue';
import Baris from './views/baris.vue';
import Bones from './views/bones.vue';
import Pianos from './views/pianos.vue';
import Basses from './views/basses.vue';
import Drummers from './views/drummers.vue';
import Guitars from './views/guitars.vue';
import Vocalists from './views/vocalists.vue';
import GigsBooked from './views/gigsBooked.vue';
import Band from './views/band.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/musician-entry',
      name: 'musician-entry',
      component: SignUp,
    },
    {
      path: '/',
      name: 'bookingTool',
      component: BookingTool,
    },
    {
      path: '/trumpets',
      name: 'trumpets',
      component: Trumpets,
    },
    {
      path: '/altos',
      name: 'altos',
      component: Altos,
    },
    {
      path: '/tenors',
      name: 'tenors',
      component: Tenors,
    },
    {
      path: '/baris',
      name: 'baris',
      component: Baris,
    },
    {
      path: '/bones',
      name: 'bones',
      component: Bones,
    },
    {
      path: '/pianos',
      name: 'pianos',
      component: Pianos,
    },
    {
      path: '/basses',
      name: 'basses',
      component: Basses,
    },
    {
      path: '/drummers',
      name: 'drummers',
      component: Drummers,
    },
    {
      path: '/guitars',
      name: 'guitars',
      component: Guitars,
    },
    {
      path: '/vocalists',
      name: 'vocalists',
      component: Vocalists,
    },
    {
      path: '/gigsBooked',
      name: 'gigsBooked',
      component: GigsBooked,
    },
    {
      path: '/gigsBooked/:id',
      name: 'band',
      component: Band,
      props: true,
    },
  ],
});
