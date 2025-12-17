const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
      // также можно через this.goals.pop();, для удаления последнего элемента при нажатии любого объекта
    }
  }
});

app.mount('#user-goals');
