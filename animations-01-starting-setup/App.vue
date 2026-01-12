<template>
  <!-- уникальный синтаксис навигации между компонентами
  <router-view v-slot="slotProps">
    slotProps содержит в себе все компоненты навигации, 
     поэтому нет надобности снова их указывать
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view> -->

  <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      name="para"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <!-- можно создать реакт на ивент на каждом шагу анимации -->
      <p v-if="paragraphIsVisible">This paragraph is temporary visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <!-- mode добавляет порядок выполнения действий -->
      <!-- можно юзать несколько элементов внутри транзакции, только когда 
      есть гарант, что лишь один из них будет активным в одно время -->
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue';

export default {
  components: {
    UsersList,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },

    beforeEnter(elem) {
      console.log('beforeEnter');
      console.log(elem);
      elem.style.opacity = 0;
    },
    enter(elem, done) {
      console.log('enter');
      console.log(elem);
      let round = 1;
      this.enterInterval = setInterval(() => {
        elem.style.opacity = round * 0.05;
        round++;
        if (round === 20) {
          clearInterval(this.enterInterval);
          done(); // для идентификации окончания анимации и разрешение на выполнение afterEnter
        }
      }, 20);
    },
    afterEnter(elem) {
      console.log('afterEnter');
      console.log(elem);
      elem.style.opacity = 1;
    },
    beforeLeave(elem) {
      console.log('beforeLeave');
      console.log(elem);
      elem.style.opacity = 1;
    },
    leave(elem, done) {
      console.log('leave');
      console.log(elem);
      let round = 20;
      this.leaveInterval = setInterval(() => {
        elem.style.opacity = round * 0.05;
        round--;
        if (round === 0) {
          clearInterval(this.leaveInterval);
          done(); // для идентификации окончания анимации и разрешение на выполнение afterLeave
        }
      }, 20);
    },
    afterLeave(elem) {
      console.log('afterLeave');
      console.log(elem);
      elem.style.opacity = 0;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; настройка определенного элемента анимации или всех изменений (all) */
}
.animate {
  /* transform: translateX(-10rem); ручное действие анимации */
  animation: sliding 2s ease-out forwards; /* forwards нужен для фиксации в конечном положении */
}
.route-enter-active {
  animation: sliding 1s ease-out reverse;
}
.route-leave-active {
  animation: sliding 1s ease-in;
}
@keyframes sliding {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(0.8);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.3s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-active {
  transition: all 0.3s ease-in;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
