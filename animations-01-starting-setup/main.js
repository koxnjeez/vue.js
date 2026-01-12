import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourceGoals from './pages/CourceGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourceGoals },
  ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// дословно когда часть рутинга будет готова, только тогда подключить фрагмент
// кода где он будет использован, таким образом можно пропустить этап перехода
// с пустой страницы на всех юзеров, просто подключится к темплейту, когда переход
// между ними уже закончится (для отключения анимации компонента при входе на сайт)
router.isReady().then(() => {
  app.mount('#app');
});
