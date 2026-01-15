<template>
  <div class="home">
    <h1 ref="appTitleRef">{{ appTitle }}</h1>
    <h2>{{ counter.title }}</h2>

    <div>
      <button class="symb-btn rectangle" @click="counter.decreaseCounter(10)">
        --
      </button>
      <button class="symb-btn" @click="counter.decreaseCounter(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="symb-btn" @click="counter.increaseCounter(1)">+</button>
      <button class="symb-btn rectangle" @click="counter.increaseCounter(10)">
        ++
      </button>
    </div>

    <p>This number is {{ counter.numberEvenness }}</p>

    <div class="edit">
      <h4>Your counter title:</h4>
      <input type="text" v-model="counter.title" v-autofocus />
    </div>
  </div>
</template>

<!-- <script>
import { ref } from "vue";

// аналоговый метод реализации через composition API
export default {
  setup() {
    const counter = ref(0);

    const increaseCounter = () => {
      counter.value++;
    };
    const decreaseCounter = () => {
      counter.value--;
    };

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    };
  },
};
</script> -->

<!-- аналоговый метод реализации через script setup -->
<script setup>
// imports

import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated,
} from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "@/stores/counter";

// data

// const counter = ref(0); // не реактивные неизменные данные
// const counterTitle = ref("My Counter");

const appTitle = "Customizable counter app";

const appTitleRef = ref(null);

onMounted(() => {
  // вывод ширины которую занимает элемент (в данном случае полный размер окна)
  console.log(`App title's width is ${appTitleRef.value.offsetWidth} px`);
});

// counter

// можно сохранить в переменную const counter = useCounter(); и использовать с помощью counter..., продемонстрировано в PostsView.vue
// const { counterData, numberEvenness, increaseCounter, decreaseCounter } =
//   useCounter();

const counter = useCounterStore();

// lifecycle hooks

onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {
  console.log("onUpdated");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});
onActivated(() => {
  console.log("onActivated");
});
onDeactivated(() => {
  console.log("onDeactivated");
});
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
.symb-btn,
.counter {
  font-size: 30px;
  margin: 0.6rem;
}
.symb-btn {
  padding: 0;
  height: 2.5rem;
  width: 2.5rem;
}
.rectangle {
  width: 3.5rem;
}
.edit {
  margin-top: 5rem;
}
</style>
