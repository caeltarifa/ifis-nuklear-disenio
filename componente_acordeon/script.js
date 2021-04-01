//VARIABLES
const pos = [19, 37];
var i = 0;
const exampleData1 = [];
const exampleData2 = [];
//const exampleData3=[];

//DICCIONARIO DE DATOS
const datos = {

  'fecha_modificacion': '21-09-2021',
  'hora_modificacion': '15:25:45',
  'data':
    [
      { 'lugar': 'SLCB', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLGY', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLLP', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLRQ', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLET', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLSU', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLTR', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLUY', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLVR', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLHI', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLRI', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLRY', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLPS', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLYA', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLAG', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLAP', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLAS', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLBJ', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLCA', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLCP', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLJE', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLJO', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLJV', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLMG', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLOR', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLPO', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLRA', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLRB', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLSA', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLSB', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLSI', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLSM', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLSR', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLTI', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLVG', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }, { 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLVM', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLTJ', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] },
      { 'lugar': 'SLCX', 'nombre_lugar': 'air_lugar', 'nombre_aer': 'nombre_pista', 'pib': [{ 'asunto': 'asunto_x', 'estado_asunto': 'esatado_y', 'ref': 'C0990/21' }] }
    ]
}

function acordeon1() {

  for (j = 0; j < pos[0]; j++) {
    //console.log(j);
    exampleData1[j] = {
      id: j,
      active: false,
      title: datos.data[i].lugar,
      details:
        `Nombre_lugar : ` + datos.data[i].nombre_lugar + `<br>` +
        `Nombre_aero : ` + datos.data[i].nombre_aer + `
       
        <div class="tabla">   
        <div id="app">        
          <table class="table table-striped">
          <thead>
            <tr>
              <th>Asunto</th>
              <th>Estado asunto</th>
              <th>Referencia</th>
            </tr>
          </thead>
          <tbody> 
           `+ generar_filas(datos.data[i].pib)+`
          </tbody>
         </table>
         </div>
          
        </div> `


    }
    i++;

  }
}



function acordeon2() {

  for (var j = 0; j < pos[0]; j++) {
    exampleData2[j] = {
      id: j,
      active: false,
      title: datos.data[i].lugar,
      details:
        `Nombre_lugar : ` + datos.data[i].nombre_lugar + `<br>` +
        `Nombre_aero : ` + datos.data[i].nombre_aer + `<br><br>` +
       `
        <div class="tabla">   
        <div id="app">        
          <table class="table table-striped">
          <thead>
            <tr>
              <th>Asunto</th>
              <th>Estado asunto</th>
              <th>Referencia</th>
            </tr>
          </thead>
          <tbody> 
           `+ generar_filas(datos.data[i].pib)+`
          </tbody>
         </table>
         </div>
          
        </div> `


    }
    i++;
  }

}

acordeon1();
acordeon2();


function generar_filas(vector){
  fila=``
  for (let i = 0; i < vector.length; i++) {
    fila = fila + 
    `<tr>`+
    `<td>`+ vector[i].asunto + ` </td>` +
    `<td>`+ vector[i].estado_asunto + `</td>`+
    `<td>`+ vector[i].ref + `</td>`+
  `</tr>`
  }

  return fila
}




Vue.component('accordion', {
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      groupId: null
    }
  },
  template: `
    <dl class="accordion box" role="presentation">
      <accordion-item
        v-for="item in content"
        :multiple="multiple"
        :item="item"
        :groupId="groupId"
        :key="item.id">
      </accordion-item>
    </dl>
  `,
  mounted() {
    this.groupId = this.$el.id
    
  }
})

Vue.component('accordion-item', {
  props: ['item', 'multiple', 'groupId'],
  template: `
    <div :id="groupId + '-' + item.id" class="accordion-item" :class="{'is-active': item.active}">
      <dt class="accordion-item-title">
        <button @click="toggle" class="accordion-item-trigger">
          <h4 class="accordion-item-title-text">{{item.title}}</h4>
          <span class="accordion-item-trigger-icon"></span>
        </button>
      </dt>
      <transition
        name="accordion-item"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition">
        <dd v-if="item.active" class="accordion-item-details">
          <div v-html="item.details" class="accordion-item-details-inner"></div>
        </dd>
      </transition>
    </div>
  `,
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    }
  }

})

























new Vue({
  el: '#app',
  data: {
    example1: exampleData1,
    example2: exampleData2,
    dato: [
      { fecha_mod: "21-09-2021", hora_mod: "15:25:45" }],


  }
})

//ENCABEZADO




