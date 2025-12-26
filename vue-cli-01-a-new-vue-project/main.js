import { createApp } from 'vue';
import App from './App.vue'
import ContactComponent from './components/ContactComponent.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

app.component('contact-component', ContactComponent);
app.component('new-friend', NewFriend);

app.mount("#app");
