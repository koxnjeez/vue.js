<template>
    <dialog open> <!-- диалог поверх окна, к примеру для вывода ошибки -->
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog {
    box-sizing: border-box;
    margin: 0;
    padding: 1rem 1.5rem;
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: white;
    border: none;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>