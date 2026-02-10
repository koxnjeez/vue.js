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
        v-for="user in displayedItems"
        :key="user.id"
        :id="user.id"
        :user-name="user.fullName"
        @list-projects="emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from 'vue';
import UserItem from './UserItem.vue';
import useSearch from '../../hooks/search.js';
import useSort from '../../hooks/sort.js';

const emit = defineEmits(['list-projects']);

// users

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

// search

const { users } = toRefs(props);

const { enteredSearchTerm, updateSearch, availableItems } = useSearch(
  users,
  'fullName'
);

// sorting

const { sorting, sort, displayedItems } = useSort(availableItems, 'fullName');
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
