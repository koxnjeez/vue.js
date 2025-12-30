<template>
  <section>
    <base-card>
      <template #header> <!-- v-slot в сочетании со slot внутри файла дизайна определенного элемента
       позволяет сделать несколько областей куда нужно занести верстку -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p> <!-- часть не находящаяся в именном темплейте автоматом идет в дефолный slot без имени -->
      </template>
      </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!-- scoped ограничивает стилизацию только для конкретного компонента  -->
<style scoped>
</style>