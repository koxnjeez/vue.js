<template>
  <div>
    <add-edit-note
      ref="addEditNoteRef"
      v-model="noteContent"
      bg-color="warning-dark"
      placeholder="Enter edited note..."
      label="Edit your note!"
    >
      <template #button>
        <button @click="$router.back()" class="button is-white mr-2">
          Cancel
        </button>
        <button @click="handleButtonClick" class="button is-warning">
          Save it
        </button>
      </template>
    </add-edit-note>
  </div>
</template>

<script setup>
// imports

import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes } from "@/stores/StoreNotes";
import { useRoute, useRouter } from "vue-router";

// store

const storeNotes = useStoreNotes();

// router

const route = useRoute();
const router = useRouter();

// note

const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

// click save

const handleButtonClick = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
