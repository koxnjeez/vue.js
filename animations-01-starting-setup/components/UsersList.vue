<template>
  <transition-group tag="ul" name="user-list">
    <!-- замена обычному листу, для множественной анимации каждого элемента списка -->
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Oleg', 'Olesya'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value);
      this.$refs.userNameInput.value = '';
    },
    removeUser(user) {
      this.users = this.users.filter((us) => user !== us);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px dashed #aaa;
  padding: 1rem;
  margin: 0.2rem;
  text-align: center;
}
input {
  margin: 0 0.5rem;
}
.user-list {
  position: absolute; /* при установке начинает реагировать на изменение размера массива */
}
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.user-list-enter-active {
  transition: all 0.3s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-active {
  transition: all 0.3s ease-in;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.user-list-move {
  /* используется для анимации сторонних элементов, на которые так же влияют изменения конкретных анимированных */
  transition: transform 0.5s ease;
}
</style>
