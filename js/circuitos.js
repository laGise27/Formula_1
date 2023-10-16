
const { createApp } = Vue

createApp({
    data() {
        return {
            url: './json/circuitos.json',
            error: false,
            datos: [],

        }
    },

    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                   this.datos=data.circuitos
                } 
                    
                    
                    );

        }
    },
    created(){
        this.fetchdata(this.url)
    }
}).mount('#app')

