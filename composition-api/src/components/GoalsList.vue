<template>
  <section class="container">
    <h2>My Goals</h2>
    <ul>
      <li v-for="goal in props.goals" :key="goal.id">{{ goal.text }}</li>
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  goals: {
    type: Array,
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
}
</style>
