<template>
    <form @submit.prevent="sendForm" id="input_form">
        <p id="add_text_title">Add new friend</p>
        <div class="input_block">
            <input v-model="new_friend.id" placeholder="Id">
            <input v-model="new_friend.name" placeholder="Name">
            <input v-model="new_friend.phoneNumber" placeholder="Phone number">
            <input v-model="new_friend.emailAddress" placeholder="Email">
        </div>
        <button type="submit">Add new friend</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            new_friend: {
                id: '',
                name: '',
                phoneNumber: '',
                emailAddress: '',
                isFavourite: false
            }
        };
    },
    emits: ['add-new-friend'],
    methods: {
        sendForm() {
            this.$emit('add-new-friend', this.new_friend);
            this.new_friend.id = '';
            this.new_friend.name = '';
            this.new_friend.phoneNumber = '';
            this.new_friend.emailAddress = '';
        }
    }
}
</script>

<style>

#add_text_title {
    margin: 0 0 0.5rem 0;
    font-size: 25px;
    font-weight: bold;
}

#input_form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
}

.input_block {
    margin-bottom: 1rem;
}

input {
    height: 2.5rem;
    width: 10rem;
    padding-left: 0.5rem;
    margin: auto 0.3rem;
    border: 2px dotted black;
}

</style>