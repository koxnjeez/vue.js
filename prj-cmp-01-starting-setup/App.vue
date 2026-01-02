<template>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
    components: {
        TheHeader,
        TheResources
    }
}
</script>

<style>

* {
    box-sizing: border-box;
}

html {
    font-family: 'Trebuchet MS', sans-serif;
}

body {
    margin: 0;
    background-color: #1a1a1a;
    color: #e1e1e1; 
}

</style>