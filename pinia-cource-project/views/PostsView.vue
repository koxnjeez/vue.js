<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/postDetail/${post.id}`">
          {{ post.title }}
        </router-link>
      </li>
    </ul>

    <textarea v-autofocus></textarea>

    <div>
      <button
        class="counter-button"
        @click="counter.increaseCounter(1)"
        :class="{ 'green-btn': counter.numberEvenness === 'odd' }"
      >
        {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { vAutofocus } from "@/directives/vAutofocus";

// posts
const posts = ref([
  {
    id: "id1",
    title: "Post1",
  },
  {
    id: "id2",
    title: "Post2",
  },
  {
    id: "id3",
    title: "Post3",
  },
]);

// counter
const counter = useCounterStore();
</script>

<style scoped>
ul {
  margin-bottom: 2rem;
}
.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}
.counter-button.green-btn {
  background-color: #00bd7e;
}
</style>
