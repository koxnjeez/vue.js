<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }}
    | Network status:&nbsp;
    <span :style="{ color: online ? 'green' : 'red' }">
      {{ online ? "Online" : "Offline" }}
    </span>
  </div>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modal">Modals</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
// imports
import { reactive, provide } from "vue";
import { useOnline } from "@vueuse/core";

const userData = reactive({
  name: "Sanny",
  username: "wishhxx",
});

provide("userData", userData);

// online status
const online = useOnline();
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  display: flex;
  justify-content: end;
  font-size: 15px;
}
</style>
