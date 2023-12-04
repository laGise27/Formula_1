const { createApp } = Vue

createApp({
    data() {
        return {
            pilotos: [],
            url: 'https://mcforets.pythonanywhere.com/pilotos',
            error: false,
            cargando: true,
            id: 0,
            nombre: "",
            escuderia: "",
            edad: 0,
            nacionalidad: "",
            imagen: "",
        }
    },

    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.pilotos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        }
    },
    created() {
        this.fetchdata(this.url)
    }
}).mount('#app')

