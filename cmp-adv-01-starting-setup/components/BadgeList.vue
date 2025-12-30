<template>
  <section>
    <base-card>
      <template #header>
        <h2>Available Badges</h2>
      </template>
      <template #default> <!-- аналогово отсутствию темплейта для дефолтной части можно прописать явно дефолт -->
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
      </base-card>
  </section>
</template>

<!-- scoped ограничивает стилизацию только для конкретного компонента  -->
<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>