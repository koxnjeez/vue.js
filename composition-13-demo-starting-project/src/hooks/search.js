import { watch, ref, computed } from 'vue';

export default function useSearch(items, searchPrompt) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  watch(enteredSearchTerm, (val) => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchPrompt]?.includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  return {
    enteredSearchTerm,
    updateSearch,
    availableItems,
  };
}
