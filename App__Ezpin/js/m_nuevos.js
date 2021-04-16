Vue.component("multiselect", window.VueMultiselect.default);

new Vue({
  el: "#app",
  data: {
    value: [],
    options: []
  },
  methods: {
    addTag(newTag) {
      const tag = {
        title: newTag,
        // you'll need to add other items specific to your objects        
      };
      this.options.push(tag);
      this.value.push(tag);
    }
  },
  mounted() {
    var self = this;
    axios.get("https://jsonplaceholder.typicode.com/todos?_start=1&_end=10").then(response => {
      self.options = response.data;
    }).catch(error => {
      alert(error);
    });
  }
});