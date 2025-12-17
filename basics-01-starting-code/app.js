// Vue.createApp({
//   data() {
//     return {
//       courseGoal: "Go to market",
//       marketLink: "https://silpo.ua/",
//     };
//   },
//   methods: {
//     outputGoal() {
//       const randomNumber = Math.random();
//       if (randomNumber <= 0.5) return "Go to Silpo";
//       else return "Go to Varus";
//     }
//   }
// }).mount('#user-goal');



Vue.createApp({
  data() {
    return {
      song: 'Friday (Riton & Nightcrawlers)',
      link: 'https://learning.edx.org/course/course-v1:HarvardX+CS50+X/home',
      counterValue: 0,
      name: '',
      lastname: '',
      selectedName: '',
    };
  },
  watch: {
    selectedName(fullname) {
      if(fullname !== '') {
        console.log("new name alert is runned");
        alert("New name was replaced");
      }
    },
    counterValue(value) {
      console.log("value correcting is runned");
      if(value > 100 || value < -100){
        this.counterValue = 0;
      }
    }
  },
  computed: {
    randomSign() {
      console.log("random sign is runned");
      const emojis = ['😼', '🐐', '😁', '😛', '💋'];
      return emojis[Math.floor(Math.random() * emojis.length)];
    },
    fullname() {
      console.log("fullname is runned");
      if(this.selectedName === '') {
        return 'unknown';
      }
      else {
        return this.selectedName;
      }
    }
  },
  methods: {
    increase(value) {
      console.log("increase is runned");
      this.counterValue += value;
    },
    decrease(value) {
      console.log("decrease is runned");
      this.counterValue -= value;
    },
    confirmName(mode) {
      console.log("name confirmation (enter) is runned");
      if(mode !== "reset" && (this.name !== '' || this.lastname !== '')) {
        this.selectedName = this.name + " " + this.lastname;
      }
      this.name = '';
      this.lastname = '';
    },
    submitForm() {
      console.log("submit form alert is runned");
      // такая вариация тоже рабочая
      // event.preventDefault();
      alert("Authentication form is submitted");
    },
    resetName() {
      console.log("reset name is runned");
      this.confirmName("reset");
      this.selectedName = '';
    }
  }
}).mount('#user-goal');