/* app2 = new Vue({
  el: '#app2',
  delimiters: ['[[', ']]'],
  data(){
    return {
      nombres:[],
      variable:[],
      valores:[]
    }
  },
  computed:{
    listado(){
      const path = 'http://upsilon.aasana.ga/pibrealtime'
      axios.get(path).then((respuesta) => {
        this.nombres = respuesta.data
        this.variable = [...new Set(this.nombres.map(lugar => lugar.lugar))]
        for(i=1;i<this.variable.length;i++){
          this.valores.push({lugar:this.variable[i]})
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}); */

app2 = new Vue({
  el: '#app2',
  delimiters: ['[[', ']]'],
  data(){
    return{
      nombres:[],
      datos:[],
      variable:[],
      valores:[],
      nombres2:[],par:[],impar:[]
    }
  },
  methods:{
    mensaje(){
      const path = 'http://upsilon.aasana.ga/pibrealtime'
      axios.get(path).then((respuesta) => {
        this.nombres2 = respuesta.data
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  computed:{
    listado(){
      const path = 'http://upsilon.aasana.ga/pibrealtime'
      axios.get(path).then((respuesta) => {
        this.nombres = respuesta.data
        this.variable = [...new Set(this.nombres.map(lugar => lugar.lugar))]
        /* console.log(this.variable) */

        for(i=1;i<this.variable.length;i++){
          if(i%2==0){
            this.par.push({lugar:this.variable[i],f:'f-'+i, h:'h-'+i, h2:'#h-'+i});
          }else{
            this.impar.push({lugar:this.variable[i],f:'f-'+i, h:'h-'+i, h2:'#h-'+i});
          }
        }
        console.log(this.valores);
        /* for(i=0;i<this.nombres.length;i++){
          this.datos.push({f:'f-'+this.nombres[i].id, h:'h-'+this.nombres[i].id, h2:'#h-'+this.nombres[i].id});
        }
        console.log(this.datos); */
      }).catch((error) => {
        console.log(error)
      })
    }
  }
});