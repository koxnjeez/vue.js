<template>
  <div class="post-detail">
    <h1>Thats a post page</h1>
    <div>
      <button @click="showPostId" class="btn">Show id</button>
    </div>
    <p>
      <router-link to="/posts">&lt; Back</router-link>
    </p>
    <div>
      <button @click="goHomeTimer" class="btn">Go Home in 3sec</button>
    </div>
    <div>
      <button @click="goToFirstPost" class="btn">Go to first post</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`Current post has a unique id: ${route.params.id}`);
};

const goHomeTimer = () => {
  setTimeout(() => {
    router.push("/");
  }, 3000);
};

const goToFirstPost = () => {
  router.push({
    // можно пропушить адрес вместе с id как параметр
    name: "postDetail",
    params: {
      id: "id1",
    },
  });
};
</script>
