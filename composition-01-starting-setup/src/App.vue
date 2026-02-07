<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="increaseAge">Grow</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInputRef" />
      <button @click="setLastName">Set last name</button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch, provide, onBeforeMount, onMounted } from 'vue';
import UserData from './components/UserData.vue';

// const uName = ref('Tolik');
const firstName = ref('');
const lastName = ref('');
const uAge = ref(24);
const lastNameInputRef = ref(null);
// const user = reactive({
//   name: 'Tolik',
//   age: 24,
// });

provide('userAge', uAge);

const getFullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

function setLastName() {
  lastName.value = lastNameInputRef.value.value;
}

watch([getFullName, uAge], (newValues) => {
  console.log(`The user ${newValues[0]} is ${newValues[1]} years old already!`);
});

function increaseAge() {
  uAge.value++;
}

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});
// и тд

// setTimeout(() => {
//   user.name = 'Tolik';
//   user.age = uAge;
// }, 2000);

// return {
//   userName: getFullName,
//   userAge: uAge,
//   increaseAge,
//   firstName,
//   lastName,
//   lastNameInputRef,
//   setLastName,
// };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
