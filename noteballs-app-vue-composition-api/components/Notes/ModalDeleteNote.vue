<template>
  <div class="modal is-active p-5">
    <div class="modal-background"></div>
    <div class="modal-card" ref="deleteModalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button
          class="delete"
          aria-label="close"
          ref="closeBtnRef"
          @click="closeModal"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure want to delete the note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button class="button" ref="cancelBtnRef" @click="closeModal">
            Cancel
          </button>
          <button
            class="button is-danger"
            @click="storeNotes.deleteNote(noteId)"
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
// imports

import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "@/stores/StoreNotes";

// props

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

// emits

const emit = defineEmits(["update:modelValue"]);

// refs

const deleteModalCardRef = ref(null);

// store

const storeNotes = useStoreNotes();

// close modal

const closeModal = () => {
  emit("update:modelValue", false);
};

// outside click to close modal

onClickOutside(deleteModalCardRef, closeModal);

// keyboard

const handleKeybord = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keyup", handleKeybord);
});
// разбито на блоки, потому что ивент листенер остается
// и продолжает дублироваться когда закрывается модвл
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeybord);
});
</script>
