import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga numquam voluptates cumque expedita! Obcaecati nisi odio optio fugiat natus officiis possimus quasi, reprehenderit placeat dolores soluta, asperiores architecto cumque?",
        },
        {
          id: "id2",
          content:
            "This is a shorter version of lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let note = {
        id: new Date().toISOString(),
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      console.log("id:", id);
      console.log("content:", content);

      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
