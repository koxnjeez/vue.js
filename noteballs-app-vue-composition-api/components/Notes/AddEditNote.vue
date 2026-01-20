<template>
  <div
    class="card has-background-link-dark p-3"
    :class="`has-background-${bgColor}`"
  >
    <label class="label" v-if="label">{{ label }}</label>

    <div class="field">
      <div class="control">
        <!-- :value в свою очередь не записывает в элемент значение textarea,
         а только читает с элемента содержание и заполняет им текствое поле -->
        <textarea
          class="textarea"
          :placeholder="placeholder"
          ref="newNoteRef"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          v-autofocus
          maxlength="100"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports

import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

// props

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "link-dark",
  },
  placeholder: {
    type: String,
    default: "Type smth...",
  },
  label: {
    type: String,
  },
});

// emits

const emits = defineEmits(["update:modelValue"]);

// focus textarea

const newNoteRef = ref(null);
const focusTextarea = () => {
  newNoteRef.value.focus();
  console.log("focusTextarea");
};

// const noteContent = computed({
//   get() {
//     return props.modelValue;
//   },
//   set(value) {
//     emits("update:modelValue", value);
//   },
// });

// используется для открытия доступа к методам для род компонентов
defineExpose({
  focusTextarea,
});
</script>
