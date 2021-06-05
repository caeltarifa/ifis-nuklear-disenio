app=new Vue({
  el: '#app2',
  data() {
    return {titulo: '',fecha: '', todos:[]}
  },
  methods: {
    modal() {
      this.titulo = this.titulo;
    },
    titulo_lugar: function (e) {
      this.titulo = e;

      const path = 'http://upsilon.aasana.ga/pibrealtime'
      axios.get(path).then((respuesta) => {
        this.fecha = respuesta.data[0].hora_actualizado
        this.todos = respuesta.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
});

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FlbHQiLCJhIjoiY2tmNGx4MDY3MDBnNTJ5cDh2aHhjOTQyciJ9.juIQGQyyJdwT0cIfnbFA3Q';

posiciones = [
  { 'nombre': 'SLCB', 'longitude': '-66.177101', 'latitude': '-17.421' },
  { 'nombre': 'SLGY', 'longitude': '-65.345802', 'latitude': '-10.8216' },
  { 'nombre': 'SLLP', 'longitude': '-68.1922', 'latitude': '-16.5133' },
  { 'nombre': 'SLRQ', 'longitude': '-67.498001', 'latitude': '-14.4275' },
  { 'nombre': 'SLET', 'longitude': '-63.171398', 'latitude': '-17.811501' },
  { 'nombre': 'SLSU', 'longitude': '-65.149612', 'latitude': '-19.246836' },
  { 'nombre': 'SLTR', 'longitude': '-64.917999', 'latitude': '-14.8187' },
  { 'nombre': 'SLUY', 'longitude': '-66.830002', 'latitude': '-20.459999' },
  { 'nombre': 'SLVR', 'longitude': '-63.1353', 'latitude': '-17.644699' },
  { 'nombre': 'SLHI', 'longitude': '-65.141502', 'latitude': '-16.98975' },
  { 'nombre': 'SLRI', 'longitude': '-66.116669', 'latitude': '-11.0105' },
  { 'nombre': 'SLRY', 'longitude': '-65.149612', 'latitude': '-13.3333333333' },
  { 'nombre': 'SLPS', 'longitude': '-57.8191625744', 'latitude': '-18.9748221244' },
  { 'nombre': 'SLYA', 'longitude': '-63.65166666666', 'latitude': '-21.9608333' },
  { 'nombre': 'SLAG', 'longitude': '-63.9627777777', 'latitude': '-19.8238889' },
  { 'nombre': 'SLAP', 'longitude': '-68.4119444444', 'latitude': '-14.7355556' },
  { 'nombre': 'SLAS', 'longitude': '-63.15666666666', 'latitude': '-15.9302778' },
  { 'nombre': 'SLBJ', 'longitude': '-64.3127777777', 'latitude': '-22.7733333' },
  { 'nombre': 'SLCA', 'longitude': '-63.5274999999', 'latitude': '-20.0072222' },
  { 'nombre': 'SLCP', 'longitude': '-62.028611111', 'latitude': '-16.1383333' },
  { 'nombre': 'SLJE', 'longitude': '-60.7430555555', 'latitude': '-17.8308333' },
  { 'nombre': 'SLJO', 'longitude': '-64.6744444444', 'latitude': '-13.0658333' },
  { 'nombre': 'SLJV', 'longitude': '-62.4702777777', 'latitude': '-16.2708333' },
  { 'nombre': 'SLMG', 'longitude': '-64.0619444444', 'latitude': '-13.2586111' },
  { 'nombre': 'SLOR', 'longitude': '-67.075', 'latitude': '-17.9555556' },
  { 'nombre': 'SLPO', 'longitude': '-65.7233333333', 'latitude': '19.5422222' },
  { 'nombre': 'SLRA', 'longitude': '-64.6038888888', 'latitude': '-13.2638889' },
  { 'nombre': 'SLRB', 'longitude': '-59.7658333333', 'latitude': '-18.3277778' },
  { 'nombre': 'SLSA', 'longitude': '-65.4347222222', 'latitude': '-13.7616667' },
  { 'nombre': 'SLSB', 'longitude': '-66.7386111111', 'latitude': '-14.8577778' },
  { 'nombre': 'SLSI', 'longitude': '-60.96166666666', 'latitude': '-16.3844444' },
  { 'nombre': 'SLSM', 'longitude': '-65.6338888888', 'latitude': '-14.9655556' },
  { 'nombre': 'SLSR', 'longitude': '-66.7869444444', 'latitude': '-14.0744444' },
  { 'nombre': 'SLTI', 'longitude': '-58.40194444444', 'latitude': '-16.3391667' },
  { 'nombre': 'SLVG', 'longitude': '-64.0994444444', 'latitude': '-18.4825' },
  { 'nombre': 'SLVM', 'longitude': '-63.4066666666', 'latitude': '-21.2541667' },
  { 'nombre': 'SLTJ', 'longitude': '-64.701302', 'latitude': '-21.5557' },
  { 'nombre': 'SLLF', 'longitude': '0', 'latitude': '0' },
  { 'nombre': 'SLCX', 'longitude': '-68.782898', 'latitude': '-11.0404' }
];

var beforeMap = new mapboxgl.Map({
  container: 'before',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-68, -17],
  zoom: 5
});

var lista_lugares = []
for (var i = 0; i < posiciones.length; i++) {
  var geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'message': posiciones[i].nombre,
          'iconSize': [35, 35]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [posiciones[i].longitude, posiciones[i].latitude]
        }
      }
    ]
  };
  lista_lugares.push(geojson)
}

lista_lugares.forEach(function (geojson) {
  var el = document.createElement('b-button');
  el.className = 'marker';

  var att = document.createAttribute("v-on:click");  
  att.value = "titulo_lugar"; 

  el.setAttributeNode(att)

  el.style.backgroundImage = 'url(img/mapa/mapbox-icon.png)';
  /*'url(https://placekitten.com/g/' + geojson.features[0].properties.iconSize.join('/') +')';*/
  el.style.width = geojson.features[0].properties.iconSize[0] + 'px';
  el.style.height = geojson.features[0].properties.iconSize[1] + 'px';
  el.style.backgroundSize = '100%';

  el.addEventListener('click', function () {
    //window.alert(geojson.features[0].properties.message);
    //document.getElementById('ciudad').value = geojson.features[0].properties.message
    //app.titulo_lugar.apply('hola');
    app.titulo_lugar(geojson.features[0].properties.message)

  });
  

  // add marker to map
  new mapboxgl.Marker(el).setLngLat(geojson.features[0].geometry.coordinates).addTo(beforeMap);
});


posiciones2 = [
  { 'nombre': 'SLBJ', 'longitude': '-64.3127777777', 'latitude': '-22.7733333' },
  { 'nombre': 'SLCA', 'longitude': '-63.5274999999', 'latitude': '-20.0072222' },
  { 'nombre': 'SLCP', 'longitude': '-62.028611111', 'latitude': '-16.1383333' },
  { 'nombre': 'SLJE', 'longitude': '-60.7430555555', 'latitude': '-17.8308333' },
  { 'nombre': 'SLJO', 'longitude': '-64.6744444444', 'latitude': '-13.0658333' },
  { 'nombre': 'SLJV', 'longitude': '-62.4702777777', 'latitude': '-16.2708333' },
  { 'nombre': 'SLMG', 'longitude': '-64.0619444444', 'latitude': '-13.2586111' },
  { 'nombre': 'SLOR', 'longitude': '-67.075', 'latitude': '-17.9555556' },
  { 'nombre': 'SLPO', 'longitude': '-65.7233333333', 'latitude': '19.5422222' },
  { 'nombre': 'SLRA', 'longitude': '-64.6038888888', 'latitude': '-13.2638889' },
  { 'nombre': 'SLRB', 'longitude': '-59.7658333333', 'latitude': '-18.3277778' },
  { 'nombre': 'SLSA', 'longitude': '-65.4347222222', 'latitude': '-13.7616667' },
  { 'nombre': 'SLSB', 'longitude': '-66.7386111111', 'latitude': '-14.8577778' },
  { 'nombre': 'SLSI', 'longitude': '-60.96166666666', 'latitude': '-16.3844444' },
  { 'nombre': 'SLSM', 'longitude': '-65.6338888888', 'latitude': '-14.9655556' },
  { 'nombre': 'SLSR', 'longitude': '-66.7869444444', 'latitude': '-14.0744444' },
  { 'nombre': 'SLTI', 'longitude': '-58.40194444444', 'latitude': '-16.3391667' },
  { 'nombre': 'SLVG', 'longitude': '-64.0994444444', 'latitude': '-18.4825' },
  { 'nombre': 'SLVM', 'longitude': '-63.4066666666', 'latitude': '-21.2541667' },
  { 'nombre': 'SLTJ', 'longitude': '-64.701302', 'latitude': '-21.5557' },
  { 'nombre': 'SLLF', 'longitude': '0', 'latitude': '0' },
  { 'nombre': 'SLCX', 'longitude': '-68.782898', 'latitude': '-11.0404' }
];

var afterMap = new mapboxgl.Map({
  container: 'after',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-68, -17],
  zoom: 5
});

var lista_lugares2 = []
for (var i = 0; i < posiciones2.length; i++) {
  var geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'message': posiciones2[i].nombre,
          'iconSize': [35, 35]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [posiciones2[i].longitude, posiciones2[i].latitude]
        }
      }
    ]
  };
  lista_lugares2.push(geojson)
}

lista_lugares2.forEach(function (geojson) {
  var el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = 'url(img/mapa/mapbox-icon.png)';
  el.style.width = geojson.features[0].properties.iconSize[0] + 'px';
  el.style.height = geojson.features[0].properties.iconSize[1] + 'px';
  el.style.backgroundSize = '100%';


  el.addEventListener('click', function () {
    //window.alert(geojson.features[0].properties.message);
    app.titulo_lugar(geojson.features[0].properties.message)
  });

  // add marker to map
  new mapboxgl.Marker(el).setLngLat(geojson.features[0].geometry.coordinates).addTo(afterMap);
});

// A selector or reference to HTML element
var container = '#comparison-container';

var map = new mapboxgl.Compare(beforeMap, afterMap, container, {
  // Set this to enable comparing two maps by mouse movement:
  //mousemove: true
});