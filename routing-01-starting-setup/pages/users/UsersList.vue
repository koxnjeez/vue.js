<template>
  <section>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save changes</button>
  </section>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'You sure u want to leave? Some unsaved data on the page'
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}
button {
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  border: 2px solid #bebebe;
  background-color: #e0deff;
  font-family: inherit;
  font-weight: bold;
  color: #000000;
}
</style>
