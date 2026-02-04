import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachDetail from './pages/coaches/CoachDetail.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store';

// чтобы не осущесвлять лишние процессы, компоненты импортируются, только тогда, когда они требуются
const CoachDetail = defineAsyncComponent(() =>
  import('./pages/coaches/CoachDetail.vue')
);
const CoachRegistration = defineAsyncComponent(() =>
  import('./pages/coaches/CoachRegistration.vue')
);
const ContactCoach = defineAsyncComponent(() =>
  import('./pages/requests/ContactCoach.vue')
);
const RequestsRecieved = defineAsyncComponent(() =>
  import('./pages/requests/RequestsRecieved.vue')
);
const UserAuth = defineAsyncComponent(() =>
  import('./pages/auth/UserAuth.vue')
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true, // ВАЖНО если мы хотим реактивно получить элемент с адресной строки в свой проп
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/coachId/contact
      ],
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestsRecieved,
      meta: { requiresAuth: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
