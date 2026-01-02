<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  margin: 0.3rem;
  font-family: inherit;
  border-radius: 5px;
  background-color: #e65c00;
  border: 1px solid #e65c00;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #ffab73;
  border-color: #ffab73;
}

.flat {
  background-color: transparent;
  color: #ff6600;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #ffe0cc;
}
</style>