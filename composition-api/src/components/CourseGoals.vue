<template>
  <div>
    <GoalsList :goals="filteredGoals" />
    <AddGoal @add-goal="addGoal" />
  </div>
</template>

<script setup>
import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";
import { computed, ref } from "vue";

const goals = ref([]);

const filteredGoals = computed(() => {
  return goals.value.filter(
    (goal) => !goal.text.includes("Angular") && !goal.text.includes("React"),
  );
});

const addGoal = (text) => {
  const newGoal = {
    id: new Date().toISOString(),
    text: text,
  };
  goals.value.push(newGoal);
};
</script>
