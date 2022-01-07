console.log("Hola Vue");

const miVue = Vue.createApp({
  // template: '<h2>Soy una template</h2>',
  data() {
    return {
      showData: true,
      title: 'Un título random', // Desde el html se puede acceder a esta propiedad, como con una variable de toda la vida
      author: 'Daniel Maestre',
      age: 25
    }
  },
  methods: { // Hay que poner "methods" para declarar los métodos
    cambiaTitulo() {
      this.title = "Vue The Walking Dead"; // Necesita el this para acceder a la propiedad
    },
    cambiaTituloDos(title) {
      this.title = title; // Lo recibe por parámetro desde index.html
    },
    miToggle() {
      this.showData = !this.showData // Alternar fácilmente entre true y false
    }
  }
});

miVue.mount('#app');