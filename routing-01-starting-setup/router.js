import { createRouter, createWebHistory } from 'vue-router';

import UsersList from './pages/users/UsersList.vue';
import TeamsList from './pages/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/teams/TeamsFooter.vue';
import UsersFooter from './pages/users/UsersFooter.vue';

const router = createRouter({
  // для мультистраничных проектов
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // перенаправление на другой адрес при входе на базовый адрес страницы
    {
      name: 'teams', // навигация с помощью имени
      path: '/teams',
      meta: { needsAuth: true }, // в метадате могут храниться любые данные, к примеру идентификаторы потребности аутентификации
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      }, // есть опция использования как и одного компонента навигации (component: TeamsList), так и нескольких
      children: [
        // в случае использования компонентов поверх родительских, указывается отдельный список child компонентов
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // динамический id адреса и разрешение передавать его как prop
      ],
    }, // alias: '/' - аналоговое добавление адреса, который будет направляться
    // на этот компонент с помощью alias, но тогда ссылка не меняется на нужную, она просто ссылается на тот же компонент
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('global users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    // { path: '/teams/:teamId', component: TeamMembers, props: true }, // навигация на подстраницы (/teams/pagename)
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // _, _2, _3, ... названия переменных если их использования нет в планах
    console.log('global scrollBehavior');
    console.log(to, from, savedPosition);

    if (savedPosition) {
      // если позиция скролла сохранена, то возврат идет к ней
      return savedPosition;
    }
    return { left: 0, top: 0 }; // иначе позиция сверху
  },
});

router.beforeEach(function (to, from, next) {
  console.log('global beforeEach');
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Needs Auth!');
    next();
  } else {
    next();
  }

  // next(); // разрешение навигации
  // next(false); // запрещение навигации, запрет подгрузки, можно использовать для проверки аутентификации

  // // пример использования
  // if (to.name === 'team-members') {
  //   // если переход на участников команды, то одобряем
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } }); // в ином случае перенаправляем на 2 команду
  // }
});

router.afterEach(function (to, from) {
  console.log('global afterEach');
  console.log(to, from);
});

export default router;
