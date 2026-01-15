import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    title: "My Counter Title",
  }),
  actions: {
    increaseCounter(step) {
      this.count += step;
    },
    decreaseCounter(step) {
      this.count -= step;
    },
  },
  getters: {
    numberEvenness: (state) => {
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
});
