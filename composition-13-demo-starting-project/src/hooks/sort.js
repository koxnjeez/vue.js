import { ref, computed } from 'vue';

export default function useSort(items, sortParam) {
  const sorting = ref(null);

  const sort = (mode) => {
    sorting.value = mode;
  };

  const displayedItems = computed(() => {
    if (!sorting.value) {
      return items.value;
    }
    return items.value.slice().sort((u1, u2) => {
      if (sorting.value === 'asc' && u1[sortParam] > u2[sortParam]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && u1[sortParam] > u2[sortParam]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  return {
    sorting,
    sort,
    displayedItems,
  };
}
