<template>
    <ul>
        <li :class="{selected: modelValue === 'poor'}">
            <button type="button" @click="activate('poor')">
                Poor
            </button>
        </li>
        <li :class="{selected: modelValue === 'average'}">
            <button type="button" @click="activate('average')">
                Average
            </button>
        </li>
        <li :class="{selected: modelValue === 'great'}">
            <button type="button" @click="activate('great')">
                Great
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'], // значение приходит из родительского класса, тут оно onlyread
    emits: ['update:modelValue'], // ивент смены значения
    // data() {
    //     return {
    //         selectedOption: this.modelValue
    //     };
    // },
    // computed: {
    //     selectedOption() {
    //         return this.modelValue;
    //     }
    // },
    methods: {
        activate(option) {
            // this.selectedOption = option;
            this.$emit('update:modelValue', option); // сообщаем о смене значения и меняем в род классе
        }
    }
}
</script>

<style scoped>
.selected {
    border-color: #ff6600;
}

.selected button {
    color: #ff6600;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
}

button {
    font: inherit;
    border: none;
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;
    padding: 1rem;
}
</style>