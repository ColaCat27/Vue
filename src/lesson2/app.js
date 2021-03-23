const app = {
    data() {
        return {
            paths: ['Основы', 'Компоненты', 'Роутер', 'Vuex', 'Composition'],
            text: ['text 1', 'text 2', 'text 3', 'text 4', 'text 5'],
            lastElem: 0
        };
    },
    methods: {
        changeValue(index, e) {
            const target = e.target;
            this.lastElem = index;
            target.classList.add('round-active');
        },
        toggleLine(e) {
            const target = e.target;
            if (target.textContent === "Вперед" && this.lastElem < this.paths.length - 1) {
                this.lastElem++;
            } else if (target.textContent === 'Назад' && this.lastElem != 0) {
                this.lastElem--;
            }

        }
    }
};

Vue.createApp(app).mount('#app');