<template>
  <VDContainer :width=350 :height="400" :row=4 :animation='false' :data=data @getData=getDataFromComp :type=type>
    <!-- Required; can get data and index -->
    <!-- eslint-disable-next-line vue/no-unused-vars -->
    <template v-slot:VDC="{ data, index }">
      <!-- you can customize your own element -->
      <div class="container">
        <div>{{ data.price }}</div>
        <div> {{ data.name }}</div>
        <div>{{ data.icon }}</div>
      </div>
    </template>
  </VDContainer>
  <div>
    <span>select type of component：</span>
    <select v-model="type">
      <option value="sort">sort</option>
      <option value="switch">switch</option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {},
  data () {
    return {
      data: [
        {
          name: 'target1',
          price: '11',
          icon: '💰'
        }, {
          name: 'target2',
          price: '10',
          icon: '🌲'
        }, {
          name: 'target3',
          price: '51',
          icon: '👱🏿‍♂️'
        }, {
          name: 'target4',
          price: '31',
          icon: '👻'
        }, {
          name: 'target5',
          price: '14s',
          icon: '¢'
        }
      ],
      type: 'sort'
    }
  },
  methods: {
    getDataFromComp (data:any):void {
      this.data = data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  color: red;
  width: 100px;
  height: 100px;
  border: solid 1px black;
  margin: 5px;
  border-radius: 10px;
  background: lightblue;
}
</style>
