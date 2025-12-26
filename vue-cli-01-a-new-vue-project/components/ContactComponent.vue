<template>
    <li>
        <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
        <button @click="showDetails">{{ areDetailsShowed ? 'Hide' : "Show" }} details</button>
        <button @click="toggleFavourite">Toggle favourite</button>
        <ul v-if="areDetailsShowed">
            <li><strong>Email:</strong> {{ emailAddress }}</li>
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        </ul>
        <button @click="this.$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true    
        },
        name: {
            type: String,
            required: true    
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function(value) {
            //     return value === '1' || value === '0';
            // }
        }
    },
    emits: ['toggle-favourite', 'delete'],
    // emits: {
    //     'toggle-favourite': function(id) {
    //         if (id) { return true; }
    //         else {
    //             console.warn("Id is missing");
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            areDetailsShowed: false
        };
    },
    methods: {
        showDetails() {
            this.areDetailsShowed = !this.areDetailsShowed;
        },
        toggleFavourite() {
            // this.friendIsFavourite = !this.friendIsFavourite;
            this.$emit('toggle-favourite', this.id);
        }
    }
};
</script>