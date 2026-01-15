<template>
  <teleport to=".modal-container">
    <div class="modal-light" v-if="modelValue">
      <div class="user-data">{{ userData.name }} @{{ userData.username }}</div>
      <!-- либо props.title -->
      <h1>{{ title }}</h1>
      <slot></slot>
      <button class="btn" @click="$emit('update:modelValue', false)">
        Hide modal
      </button>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from "vue";
// import { useSlots } from "vue";

// const slots = useSlots();

// console.log(slots.title());

// props

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No recieved title",
  },
});

// emits

const emit = defineEmits(["hideModal", "update:modelValue"]);

// можно вызвать либо так, либо в самом темплейте $emit('hideModal')
// const handleHideModal = () => {
//   emit("update:modelValue", false);
// };

// inject
const userData = inject("userData");
</script>

<style scoped>
.user-data {
  display: flex;
  justify-content: end;
  font-size: 15px;
}
.modal-light {
  background: #eee;
  color: #222;
  padding: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
