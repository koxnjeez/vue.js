import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxCharacters = 100) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxCharacters) {
      alert(`Only ${maxCharacters} symbols allowed!`);
    }
  });
}
