<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<!-- CUSTOM COMPOSITION FUNCTION -->
<script setup>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert.js';

const alertTitle = ref('Add new user?');

// const alertAll = useAlert(); // аналоговый способ
const [alertIsVisible, showAlert, hideAlert] = useAlert();
</script>
