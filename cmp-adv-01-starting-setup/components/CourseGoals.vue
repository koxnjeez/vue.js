<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" anotherProp="..."></slot> <!-- scoped slots позволяют обращаться к определенным параметрам slot, НЕ ВОСПРИНИМАЮТ ТИРЕ В НАЗВАНИЯХ -->
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['1 goal', '2 goal']
        };
    }
}
</script>