<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResourceButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The oficcial vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn how to google!',
                    link: 'https://google.org'
                }
            ]
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            const newResource = {
                id: title
                .toLowerCase()
                .trim()
                .split(/\s+/)
                .join('-'),
                title: title,
                description: description,
                link: link
            };
            this.storedResources.unshift(newResource); // unshift юзать вместо push, когда нужно внести в начало массива, а не в конец 
            this.selectedTab = 'stored-resources';
        },
        removeResource(resourceId) {
            const resourceIndex = this.storedResources.findIndex(res => res.id === resourceId);
            this.storedResources.splice(resourceIndex, 1);
        }
    },
    computed: {
        storedResourcesButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResourceButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    }
}
</script>