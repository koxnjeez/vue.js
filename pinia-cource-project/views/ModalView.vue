<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show light modal?
        <input type="checkbox" v-model="showLightModals" />
      </label>
    </div>
    <button class="btn" @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showLightModals ? ModalLight : Modal"
      title="Modal title"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        necessitatibus ipsam sequi nostrum quas aut rem quasi esse, assumenda
        voluptatem consequatur vel fuga repellendus voluptate magnam nesciunt
        ab? Asperiores, ipsum.
      </p>
    </component>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalLight from "@/components/ModalLight.vue";

// modals
const showModal = ref(false);
const showLightModals = ref(false);
</script>

<!-- <script>
export default {
  components: {
    Modal,
  },
};
</script> -->
