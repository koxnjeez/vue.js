<template>
  <div class="notes">
    <add-edit-note
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Enter new note..."
      label="Add new note"
    >
      <template #button>
        <button class="button is-link" @click="addNewNote" :disabled="!newNote">
          Add it
        </button>
      </template>
    </add-edit-note>

    <!-- <div class="card has-background-link-dark p-3">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="New note"
            v-model="newNote"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link"
            @click="addNewNote"
            :disabled="!newNote"
          >
            Add it
          </button>
        </div>
      </div>
    </div> -->

    <note v-for="note in storeNotes.notes" :key="note.id" :note="note"></note>
  </div>
</template>

<script setup>
// imports

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/StoreNotes";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";

// store

const storeNotes = useStoreNotes();

// notes

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNewNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

// watch

useWatchCharacters(newNote);
</script>
