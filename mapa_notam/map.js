<<<<<<< HEAD
app = new Vue({
    el: '#app',
    data:{
        titulo: '',
        lenguajes:[]
    },
    methods:{
        titulo_lugar: function(e){
            this.titulo = e;
            this.lenguajes = [
                { nombre: 'php', siglas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { nombre: 'python', siglas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { nombre: 'Java', siglas: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.' },
                { nombre: 'ASP .NET', siglas: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.' }
            ]
        },
        modal() {
            this.titulo = this.titulo;
        }
    }
});
var map;
=======
var mapa;

//DICCIONARIO
const dic = [{ 'nombre': 'SLCB', 'longitude': '-66.177101', 'latitude': '-17.421' },
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
{ 'nombre': 'SLCX', 'longitude': '-68.782898', 'latitude': '-11.0404' }]

//COLORES
const color = [{ 'color': '#00CC00' }, { 'color': '#CCFF00' }, { 'color': '#0066CC' }, { 'color': '#00CC99' },
{ 'color': '#990033' }, { 'color': '#FF6633' }, { 'color': '#FF0000' }, { 'color': '#99FF66' }, { 'color': '#CC00FF' },
{ 'color': '#660099' }, { 'color': '#66CC99' }, { 'color': '#993300' }, { 'color': '#000099' }, { 'color': '#00FFFF' },
{ 'color': '#00FF00' }, { 'color': '#3366FF' }, { 'color': '#999966' }, { 'color': '#CC00FF' }, { 'color': '#FF6600' },
{ 'color': '#00FF66' }, { 'color': '#3399FF' }, { 'color': '#996699' }, { 'color': '#CC66FF' }, { 'color': '#FFCC66' },
{ 'color': '#0099CC' }, { 'color': '#330000' }, { 'color': '#993333' }, { 'color': '#CCCCFF' }, { 'color': '#FFCC00' },
{ 'color': '#0066CC' }, { 'color': '#330066' }, { 'color': '#9900FF' }, { 'color': '#CC66CC' }, { 'color': '#FFFFFF' },
{ 'color': '#006666' }, { 'color': '#33CC99' }, { 'color': '#99FF33' }, { 'color': '#CCCC66' }]
>>>>>>> 9567acd13a6978082a2f15f6f588e6ccc620fceb

//ESTOS DATOS SERAN ENVIADOS DESDE EL SERVIDOR CON UNA PETICION GET CON VUEJS

//[
//  {'lugar':'la paz','latitude':21.213,'longitude':43.234},
//  {'lugar':'cochabamba','latitude':21.213,'longitude':43.234},
//  {'lugar':'santa cruz','latitude':21.213,'longitude':43.234}
//  .
//  .
//  .
//  .
//  {'lugar':'potosi','latitude':21.213,'longitude':43.234}
//]


//Alerta
<<<<<<< HEAD
function onClick() {
    alert("DSFD");
}


// Init Open Street Maps
function initmap() {
    // set up the map
    map = new L.Map('map');
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data ?? <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, { minZoom: 2, maxZoom: 16, attribution: osmAttrib });
    map.setView(new L.LatLng(-16.5, -65.15), 5.5);
    map.addLayer(osm);

    //DICCIONARIO
    const dic = [{ 'nombre': 'SLCB', 'longitude': '-66.177101', 'latitude': '-17.421' },
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
    { 'nombre': 'SLCX', 'longitude': '-68.782898', 'latitude': '-11.0404' }]

    //COLORES
    const color = [{ 'color': '#00CC00' }, { 'color': '#CCFF00' }, { 'color': '#0066CC' }, { 'color': '#00CC99' },
    { 'color': '#990033' }, { 'color': '#FF6633' }, { 'color': '#FF0000' }, { 'color': '#99FF66' }, { 'color': '#CC00FF' },
    { 'color': '#660099' }, { 'color': '#66CC99' }, { 'color': '#993300' }, { 'color': '#000099' }, { 'color': '#00FFFF' },
    { 'color': '#00FF00' }, { 'color': '#3366FF' }, { 'color': '#999966' }, { 'color': '#CC00FF' }, { 'color': '#FF6600' },
    { 'color': '#00FF66' }, { 'color': '#3399FF' }, { 'color': '#996699' }, { 'color': '#CC66FF' }, { 'color': '#FFCC66' },
    { 'color': '#0099CC' }, { 'color': '#330000' }, { 'color': '#993333' }, { 'color': '#CCCCFF' }, { 'color': '#FFCC00' },
    { 'color': '#0066CC' }, { 'color': '#330066' }, { 'color': '#9900FF' }, { 'color': '#CC66CC' }, { 'color': '#FFFFFF' },
    { 'color': '#006666' }, { 'color': '#33CC99' }, { 'color': '#99FF33' }, { 'color': '#CCCC66' },]



    //MARCADORES


    for (let index = 0; index < dic.length; index++) {
=======
//Click


function punto_mapa()
{ 
    
    for (let index = 0; index < dic.length; index++) {
        var nom;
>>>>>>> 9567acd13a6978082a2f15f6f588e6ccc620fceb
        var marker = L.circleMarker([dic[index].latitude, dic[index].longitude], {
            radius: 15,
            fillColor: color[index].color,
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            title: "test"
<<<<<<< HEAD
        }).on('click', onClick).addTo(map);
        marker.myJsonData = dic[index].nombre;

        //marker.bindPopup(dic[index].nombre).closePopup();

        function onClick(e) {
            app.titulo_lugar(e.target.myJsonData);
        }
=======
        }).on('click', alarma).addTo(mapa);
        marker.myJsonData = dic[index].nombre;
        marker.bindPopup(dic[index].nombre).closePopup();
        
        function alarma(e) {
            alert("Punto: " + e.target.myJsonData);
            e.target.name=dic[index.nombre];
            return e.target.myJsonData;
        }    
        
>>>>>>> 9567acd13a6978082a2f15f6f588e6ccc620fceb
    }
}

<<<<<<< HEAD
//TARJETAS
function tarjeta() {

    let tarjeta =
        `<div class="container " style="margin-left: 5%;">
  <div class="col">
  <div class="row mb-5">
  <div class="col-md-10">
      <div class="card mb-15">
          <div class="card-body" style="color: black;">
              <h5 class="card-title mb-3">TARJETA 1</h5>
              <a href="#" class="card-link">Informaci??n</a>
              
          </div>
      </div>
  </div>
  </div>
  </div>
  </div>`
=======



// Init Open Street Maps
function initmap() {
    // set up the map
    mapa = new L.Map('map');
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data ?? <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, { minZoom: 2, maxZoom: 16, attribution: osmAttrib });
    mapa.setView(new L.LatLng(-16.5, -65.15), 5.5);
    mapa.addLayer(osm);

    // PUNTOS DEL MAPA
    punto_mapa();
>>>>>>> 9567acd13a6978082a2f15f6f588e6ccc620fceb
}
initmap();


new Vue({
    el: "#app",
    data: {
        regions: [
            { Region: "Asia", Current: 0, Deployed: 0, Vacant: 0, ID: 6 }
        ],
        punto: [
            {
                lugar: "SLLP", datos: [
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                ]
            },
            {
                lugar: "SLCB", datos: [
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' }
                ]
            },
            {
                lugar: "SLET", datos: [
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' },
                    { nombre: 'NOTAM 1', informacion: 'Informaci??n 1', contenido: 'Hola mundo' }
                ]
            },
        ]

    },

    computed: {
        totalCurrent() {
            //alert("activadp automaticamente")
            //return "a";
        },
    },

    methods: {
        getTotal() {
            return "a";
        }
        ,
        greet: function (event) {
            // `this` inside methods points to the Vue instance
            alert('Hello ' + this.name + '!')
            // `event` is the native DOM event
            if (event) {
                alert(event.target.tagName)
            }
        },
        saludar: function (event) {
            vector_data = this.punto
            for (let i = 0; i < vector_data.length; i++) {
                console.log ("hola")
                if (event.target.name == vector_data[i].lugar) {
                    
                    alert("aaa .. "  + vector_data[i].lugar)
                    return vector_data[i].lugar
                }
            }
            
        },

        historia: function (event) {
            vector_data = this.datos
            for (let i = 0; i < vector_data.length; i++) {
               
                if (event.target.name == vector_data[i].lugar) {
                    return (vector_data.nombre + vector_data.informacion + vector_data.contenido )
                }
            }
            
        },



    }
})

