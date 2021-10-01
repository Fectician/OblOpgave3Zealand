<!-- Kode af Nicolas Lauridsen, Datamatiker 3b Zealand Erhvervsakademi. -->
Vue.createApp({
    data() {
        return {
            input: null,
            inputarray: []
        }
    },
    methods: {
        runner(input) {
            if (input.length > 0) {
                this.inputarray.push(input);
                this.inputarray.push(input.toUpperCase());
                this.inputarray.push(input.toLowerCase());
            }
        },
        clearing() {
            this.inputarray = [];
        }
    }
}).mount("#app")