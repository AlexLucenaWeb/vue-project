import { createRouter, createWebHistory } from 'vue-router';

import { CoachDetails } from './pages/coaches/CoachDetails.vue';
import { CoachesList } from './pages/coaches/CoachesList.vue';
import { CoachRegistration } from './pages/coaches/CoachRegistration.vue';
import { ContactCoach } from './pages/requests/ContactCoach.vue';
import { RequestsRecived } from './pages/requests/RequestsRecived.vue';
import { NotFoud } from './pages/NotFoud.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsRecived },
    { path: '/:notFound(.*)', component: NotFoud }
  ]
});

export default router;
