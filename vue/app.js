const app = Vue.createApp({
    data() {
        return {
            toDoList: [],
            toDoText: null
        }
    },
    methods: {
        addTodo() {
            this.toDoList.push(this.toDoText);
        }
    }
}).mount('#app');