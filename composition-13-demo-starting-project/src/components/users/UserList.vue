<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :id="user.id"
        :user-name="user.fullName"
        @list-projects="emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';
import UserItem from './UserItem.vue';

const emit = defineEmits(['list-projects']);

// users

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const availableUsers = computed(() => {
  let users = [];
  if (activeSearchTerm.value) {
    users = props.users.filter((usr) =>
      usr.fullName.includes(activeSearchTerm.value)
    );
  } else if (props.users) {
    users = props.users;
  }
  return users;
});

const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

// search

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

const updateSearch = (val) => {
  enteredSearchTerm.value = val;
};

watch(
  () => enteredSearchTerm.value,
  (val) => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  }
);

// sorting

const sorting = ref(null);

const sort = (mode) => {
  sorting.value = mode;
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
