<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr class="is-white">
          <th class="has-text-black">Stats</th>
          <th class="has-text-black">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Notes count</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Characters count</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      type="text"
      class="input"
      v-model="loveNoteballs"
      maxlength="50"
      placeholder="Do you love Noteballs?"
      v-autofocus
    />
  </div>
</template>

<script setup>
// imports

import { useStoreNotes } from "@/stores/StoreNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";
import { ref } from "vue";

// notes

const storeNotes = useStoreNotes();

// love noteballs

const loveNoteballs = ref("");
useWatchCharacters(loveNoteballs, 50);
</script>
