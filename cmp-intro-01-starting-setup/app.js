const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'semen',
                    name: 'Semen Semenov',
                    phone_number: '065626677',
                    email: 'ssemen@gmail.com'
                },
                {
                    id: 'alina',
                    name: 'Alina Alinova',
                    phone_number: '079213284',
                    email: 'aalin@gmail.com'
                }
            ]
        };
    }
});

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="showDetails">{{ detailsVisibility ? 'Hide' : 'Show' }} Details</button>
          <ul v-show="detailsVisibility">
            <li><strong>Phone:</strong> {{ friend.phone_number }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            detailsVisibility: false,
            friend: {
                id: 'semen',
                name: 'Semen Semenov',
                phone_number: '065626677',
                email: 'ssemen@gmail.com'
            }
        };
    },
    methods: {
        showDetails() {
            this.detailsVisibility = !this.detailsVisibility;
        }
    }
});

app.mount('#app');