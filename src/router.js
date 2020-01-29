import Vue from 'vue';
import Router from 'vue-router';
import SignUp from './views/musicians';
import BookingTool from './views/bookingTool.vue';
import GigsBooked from './views/gigsBooked.vue';
import Band from './views/band.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/musicians',
      name: 'musicians',
      component: SignUp,
    },
    {
      path: '/',
      name: 'bookingTool',
      component: BookingTool,
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
