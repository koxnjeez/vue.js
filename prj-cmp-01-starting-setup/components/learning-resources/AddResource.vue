<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>At least one input is invalid</p>
            <p>Check your values and enter them all</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                    <input type="text" id="title" name="title" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descriptionTextArea"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            inputIsInvalid: false
        };
    },
    methods: {
        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptionTextArea.value;
            const enteredLink = this.$refs.linkInput.value;

            if(enteredTitle.trim() === '' || enteredDescription.trim === '' || enteredLink.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }

            this.addResource(enteredTitle, enteredDescription, enteredLink);
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    },
    inject: ['addResource']
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #b3fff2;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #b3fff2;
  background-color: #e6fffb;
}

.form-control {
  margin: 1rem 0;
}
</style>