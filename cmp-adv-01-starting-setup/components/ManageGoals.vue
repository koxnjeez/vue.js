<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set goal</button>
    </div>
    <teleport to="body">
        <error-alert v-if="isInputEmpty">
            <h2>Your input is empty!</h2>
            <p>Enter some data</p>
        </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        'error-alert': ErrorAlert
    },
    data() {
        return {
            isInputEmpty: false
        };
    },
    methods: {
        setGoal() {
            const enteredGoal = this.$refs.goal.value;
            if(enteredGoal === '') {
                this.isInputEmpty = true;
                setTimeout(() => {
                    this.isInputEmpty = false;
                }, 3000);
            }
        }
    }
}
</script>