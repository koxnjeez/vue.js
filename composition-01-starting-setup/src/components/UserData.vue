<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup>
import { computed, defineProps, inject } from 'vue';

const props = defineProps({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const age = inject('userAge');

const userName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});
</script>
