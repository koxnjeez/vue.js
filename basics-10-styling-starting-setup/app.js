Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    computed: {
        // опционально можно реализовать в computed properties,
        // если код логики слишком большой, эта ситуация прсто для примера
        boxActiveA() {
            return { active: this.boxASelected };
        },
        boxActiveB() {
            return { active: this.boxBSelected };
        },
        boxActiveC() {
            return { active: this.boxCSelected };
        }
    },
    methods: {
        boxSelected(currentBox) {
            console.log("box selecting is runned");
            if(currentBox === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if(currentBox === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if(currentBox === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
}).mount('#styling');