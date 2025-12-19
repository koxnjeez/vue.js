const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // при использовании рефов, передается объект со всеми параметрами, мы берем не только значение,
      // соответственно можем достать любую опцию поля инпут, помимо содержимого текста
      this.message = this.$refs.userText.value;
    },
  },
  // отслеживание жизненного цикла vue | создание->монтаж области работы->обновление страницы->демонтаж области работы
  // (каждый этап имеет шаг перед выполнением и уже непосредственно законченный процесс, демонтаж осуществляется вручную)
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdated()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount('#app');
}, 5000);


const app2 = Vue.createApp({
  // потенциальная возможность отображать контент html файла через темплейты
  template: `
    <p>Current favourite sport is {{ favSport }}</p>
  `,
  data() {
    return {
      favSport: 'Powerlifting'
    };
  },
});

app2.mount('#app2');



const data = { // default js object
  msg: 'data content',
  longMsg: 'long data content'
}

const handle = {
  set(target, key, value) {
    if(key === 'msg') {
      target.longMsg = value + " long"
    }
    target.msg = value;
  }
}

const proxy = new Proxy(data, handle);

proxy.msg = 'changed data content';

console.log(proxy.longMsg)