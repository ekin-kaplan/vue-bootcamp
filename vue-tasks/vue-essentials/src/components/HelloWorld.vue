<template>
  <h1>Hi Vue.js</h1>
  <p>How it's goin {{ description }}</p>
  <input type="text" v-model="description">
  <input type="text" v-model="variable" @keyup.enter="onEnter()">
  <ul>
    <li v-for="(item, index) in arr" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      description:'',
      variable:'',
      arr:[],
      i:0
    }

  },
  methods:{
    onEnter(){
      if (this.variable.trim() !== '') {
      this.arr[this.i] = this.variable;
      this.i++;
      this.variable = '';
}
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
