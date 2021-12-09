<template>
  <div>
    <h1>Turn {{turnCount}}</h1>
    <div>
      <form @submit.prevent="add">
        <input type="text" placeholder="Character" v-model="newCounter.character">
        <input type="text" placeholder="Effect" v-model="newCounter.effect">
        <input type="number" min="1" max="999" v-model="newCounter.count">
        <button type="submit">Add</button>
      </form></div>
    <div>
      <button @click="reset" style="background-color: red;">Reset</button>
      <button @click="endTurn">End Turn</button>
    </div>
    <div class="counters">
      <table>
        <tr v-for="counter in counters" :class="{fading: counter.count == 1}">
          <td>{{counter.character}}</td><td>{{counter.effect}}</td><td>{{counter.count}}</td>
        </tr>
      </table>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface Counter {
  character: string,
  effect: string,
  count: number
}

export default defineComponent({
  data() {
    return {
      counters: [] as Counter[],
      turnCount: 1,
      newCounter: {
        character: '',
        effect: '',
        count: 1
      },
    };
  },
  methods: {
    add() {
      this.counters.push(JSON.parse(JSON.stringify(this.newCounter)));
      this.newCounter = {
        character: '',
        effect: '',
        count: 1
      };
    },
    endTurn() {
      for(let counter of this.counters) {
        --counter.count;
      }
      this.counters = this.counters.filter(counter => counter.count > 0);
      ++this.turnCount;
    },
    reset() {
      this.counters = [];
      this.turnCount = 1;
    }
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

button {
  background-color: #999999;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
}

input {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px;
  background-color: #d8d8d8;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.counters table {
  border-collapse: collapse;
  width: 80%;
  margin: 1em auto;
}

.counters tr {
  background-color: #d8d8d8;
}
.counters tr:nth-child(odd) {
  background-color: #cccccc;
}

.counters tr.fading {
  background-color: rgb(255, 113, 113);
}
 .counters tr.fading:nth-child(odd){
  background-color: rgb(255, 142, 142);
}

.counters td {
  padding: 5px;
}
</style>
