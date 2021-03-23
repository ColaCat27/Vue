const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            value: '',
            notes: []
        }
    },
    methods: {
        addNote() {
            if (this.value.length != 0) {
                this.notes.push(this.value);
                this.value = '';
            }
        },
        deleteNote(i) {
            this.notes.splice(i, 1);
        }
    }
}

const app = Vue.createApp(App).mount('#app');