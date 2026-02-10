<template>
  <base-container v-if="props.user">
    <h2>{{ props.user.fullName }}: Projects</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableItems"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';
import useSearch from '../../hooks/search';
import { defineProps, computed, watch, toRefs } from 'vue';

// user

const props = defineProps({
  user: {
    type: Object,
  },
});

const { user } = toRefs(props);

watch(user, () => {
  updateSearch('');
});

// search

// user? (если он наден, то вернется элемент, иначе вернется null)
// ?? [] (если массив ранее не найден или null, то возвращает пустой)
const projects = computed(() => {
  return user.value ? user.value.projects : [];
});

const { enteredSearchTerm, updateSearch, availableItems } = useSearch(
  projects,
  'title'
);

// projects

const hasProjects = computed(() => {
  return user.value.projects && availableItems.value.length > 0;
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
