<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['anotherProp'] }}</p>
    </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active</button>
    <button @click="setSelectedComponent('manage-goals')">Manage</button>
    <!-- keep-alive сохраняет состояние при условной смене на другой компонент и возвращении, не уничтожает его -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- аналогово неудобным v-if/v-if-else/v-else, если нужно получить название класса из переменной -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    // TheHeader, BadgeList, UserInfo, CourseGoals можно инициализировать просто словом и использовать одиночные теги
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals': CourseGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>