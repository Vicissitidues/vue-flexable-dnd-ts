<template>
  <VDContainer :width='width' :height="400" :row=4 :animation='false' @getData="getData" :data='data' :type='type'>
    <!-- Required; can get data and index -->
    <template v-slot:VDC="{ data }">
      <!-- you can customize your own element -->
      <div class="container-child">
        <div>{{ data.price }}</div>
        <div> {{ data.name }}</div>
        <div>{{ data.icon }}</div>
      </div>
    </template>
  </VDContainer>
  <div class="controller-container">
    <div>
      <span>change width：</span>
      <input type="number" step="50" v-model="width">
    </div>
    <div>
      <span>select sort type：</span>
      <select v-model="type">
        <option value="sort">sort</option>
        <option value="switch">switch</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">

interface ireply {
  name: string,
  price: string,
  icon: string,
}
interface idata {
  data: Array<ireply>,
  type: string,
  width: number
}
export default {
  name: 'App',
  components: {},
  data (): idata {
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
      type: 'sort',
      width: 400
    }
  },
  methods: {
    getData (reply: Array<ireply>): void {
      window.console.log('here comes data after sorted', reply)
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

.container-child {
  color: red;
  width: 100px;
  height: 100px;
  border: solid 1px black;
  margin: 5px;
  border-radius: 10px;
  background: lightblue;
}

.controller-container {
  display: flex;
}
</style>
