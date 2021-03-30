new Vue({
  el: '#app',
  data () {
    return {mensaje: 'Aqui retorna un valor del servidor!', distancia: "Aqui retorna la distancia (km) entre dos coordenadas!"}
  },
  methods: {
    getMensaje (captura) {
      const path = 'http://localhost:5000/api/v1.0/mensaje'
      axios.get(path, {params: {var1: captura, var2: "nada"}}).then((respuesta) => {
        this.mensaje = respuesta.data
      }).catch((error) => {
        console.log(error)
      })
    },
    mostrarMensaje: function () {
      var var1 = document.getElementById('txtvalor').value
      this.getMensaje(var1)
    }, 
    calcularDistancia: function () {
      var lat1 = document.getElementById('txtvalor').value
      var long1 = document.getElementById('txtvalor2').value
      var lat2 = document.getElementById('txtvalor3').value
      var long2 = document.getElementById('txtvalor4').value
      const path = 'http://localhost:5000/point/distance/'
      axios.get(path, {params: {start_lat: lat1, start_lng: long1, end_lat: lat2, end_lng: long2 }}).then((respuesta) => {
        this.distancia=respuesta.data + " km"
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
) 
