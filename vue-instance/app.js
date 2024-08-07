const app = Vue.createApp({
    data() {

        return {
            description: "this is my description",
            url: "https://open.spotify.com/",
            target: "_blank"
        };
    },
    methods: {
        changeTitle() {
            this.description = "yokosooo"
        }
    }

}).mount('#app');