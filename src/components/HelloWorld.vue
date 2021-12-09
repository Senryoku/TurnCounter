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
      <div class="table">
        <div class="thead">
          <div class="th">Character</div>
          <div class="th">Effect</div>
          <div class="th">Duration</div>
        </div>
        <transition-group name="list" class="tbody">
          <div class="tr list-item" v-for="counter in counters" :key="counter.id" :class="{fading: counter.count == 1}">
            <div class="td">{{counter.character}}</div>
            <div class="td">{{counter.effect}}</div>
            <div class="td">{{counter.count}}</div>
          </div>
        </transition-group>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface Counter {
  id: number;
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
        id: 0,
        character: '',
        effect: '',
        count: 1
      },
      lastId: 0,
    };
  },
  methods: {
    add() {
      this.counters.push(JSON.parse(JSON.stringify(this.newCounter)));
      this.newCounter = {
        id: this.lastId++,
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

.table {
  display: table;         
  border-collapse: collapse;
  width: 80%;
  margin: 1em auto;
}

.thead { 
  display: table-header-group;
  background-color: #585858;
  color: white;
}

.th {
  display: table-cell;
  padding: 5px;
}

.tbody {
  display: table-row-group;
}

.tr {
  display: table-row;
  width: auto;
  clear: both;
  background-color: #d8d8d8;
}

 .tr:nth-child(odd) {
  background-color: #cccccc;
}

 .tr.fading {
  background-color: rgb(255, 113, 113);
}
  .tr.fading:nth-child(odd){
  background-color: rgb(255, 142, 142);
}
.td {
  display: table-cell;
  padding-top: 5px;
  padding-bottom: 5px;
}

.list-item {
  transition: all 1s;
}

.list-enter-active {
  transition: all 0.4s;
}

.list-enter-from {
  transition: all 1s;
  transform: translateX(-50px);
  opacity: 0;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
