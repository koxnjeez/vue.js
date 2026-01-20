<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-3">
          <small>{{ charactersCounter }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link
        :to="`/editNote/${note.id}`"
        class="card-footer-item"
        href="#"
      >
        Edit
      </router-link>
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
      >
        Delete
      </a>
    </footer>
    <modal-delete-note
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="note.id"
    ></modal-delete-note>
  </div>
</template>

<script setup>
// imports

import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/StoreNotes";
import ModalDeleteNote from "./ModalDeleteNote.vue";

// props

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

// // emits

// const emits = defineEmits(["deleteNote"]);

// store

const storeNotes = useStoreNotes();

// characters count

const charactersCounter = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

// // delete clicked

// const deleteClicked = () => {
//   emits("deleteNote", props.note.id);
// };

// modals

const modals = reactive({
  deleteNote: false,
});
</script>
