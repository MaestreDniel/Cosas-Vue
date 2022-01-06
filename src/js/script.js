console.log("Hola Vue");

const miVue = Vue.createApp({
  // template: '<h2>Soy una template</h2>',
  data() {
    return {
      title: 'Un título random', // Desde el html se puede acceder a esta propiedad, como con una variable de toda la vida
      author: 'Daniel Maestre',
      age: 25
    }
  }
});

miVue.mount('#app');