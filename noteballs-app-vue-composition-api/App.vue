<template>
  <nav-bar></nav-bar>

  <div class="container is-max-desktop px-2 py-4">
    <router-view></router-view>
  </div>
</template>

<script setup>
// imports

import NavBar from "./components/layout/NavBar.vue";
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css";
</style>
