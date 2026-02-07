<template>
  <base-container v-if="props.user">
    <h2>{{ props.user.fullName }}: Projects</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
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
import { defineProps, ref, computed, watch } from 'vue';

// user

const props = defineProps({
  user: {
    type: Object,
  },
});

watch(
  () => props.user,
  () => {
    enteredSearchTerm.value = '';
  }
);

// search

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

const updateSearch = (val) => {
  enteredSearchTerm.value = val;
};

watch(enteredSearchTerm, (val) => {
  setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 300);
});

// projects

const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
