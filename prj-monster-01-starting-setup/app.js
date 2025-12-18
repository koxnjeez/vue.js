function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// let currentRound = 0;

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0 && this.winner === null) {
                this.winner = 'draw';
            } else if(value <= 0 && this.winner === null) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0 && this.winner === null) {
                this.winner = 'draw';
            } else if(value <= 0 && this.winner === null) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        currentPlayerHP() {
            if(this.playerHealth < 0)
                return {width: "0%"}
            return {width: this.playerHealth + '%'};
        },
        currentMonsterHP() {
            if(this.monsterHealth < 0)
                return {width: "0%"}
            return {width: this.monsterHealth + '%'};
        },
        specialAttackAvailability() {
            return this.currentRound % 3 !== 0;
        },
        fightEnded() {
            if(winner)
                return true;
            else
                return false;
        }
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        playerAttack() {
            this.currentRound++;
            const attackDamage = getRandomValue(6, 12);
            this.monsterHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            this.monsterAttack();
        },
        monsterAttack() {
            const attackDamage = getRandomValue(9, 17);
            this.playerHealth -= attackDamage;
            this.addLogMessage('monster', 'attack', attackDamage);
        },
        playerSpecialAttack() {
            this.currentRound++;
            const attackDamage = getRandomValue(11, 20);
            this.monsterHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            this.monsterAttack();
        },
        healPlayer() {
            this.currentRound++;
            const healedValue = getRandomValue(12, 18);
            if(this.playerHealth + healedValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healedValue;
            }
            this.addLogMessage('player', 'heal', healedValue);
            this.monsterAttack();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, val) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: val
            });
        }
    }
});

app.mount('#game');