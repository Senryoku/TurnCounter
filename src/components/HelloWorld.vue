<template>
  <div>
    <h1>Turn {{turnCount}}</h1>
    <div>
      <form @submit.prevent="add">
        <input type="text" list="character-names" placeholder="Character" v-model="newCounter.character">
        <input type="text" list="effects" placeholder="Effect" v-model="newCounter.effect">
        <input type="number" min="1" max="999" v-model="newCounter.count">
        <button type="submit">Add</button>

        <datalist id="character-names">
          <option value="Caho Lohcal" />
          <option value="Brokk Grungsson" />
          <option value="Gaeth Pernsec" />
          <option value="Nemmonis Sheddinn" />
          <option value="Vimak Ogolakanu" />
          <option value="Boss" />
        </datalist>
       
        <datalist id="effects">
          <option value="+2 CA" />
          
          <option value="Prone" />
          <option value="Grappled" />
          <option value="Deafened" />
          <option value="Blinded" />
          <option value="Charmed" />
          <option value="Frightened" />
          <option value="Poisoned" />
          <option value="Restrained" />
          <option value="Stunned" />
          <option value="Incapacitated" />
          <option value="Unconscious" />
          <option value="Invisible" />
          <option value="Paralyzed" />
          <option value="Petrified" />

          <option value="À terre" />
          <option value="Agrippé" />
          <option value="Assourdi" />
          <option value="Aveuglé" />
          <option value="Charmé" />
          <option value="Effrayé" />
          <option value="Empoisonné" />
          <option value="Entravé" />
          <option value="Étourdi" />
          <option value="Neutralisé" />
          <option value="Inconscient" />
          <option value="Invisible" />
          <option value="Paralysé" />
          <option value="Pétrifié" />
        </datalist>
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
        <transition-group tag="div" name="list" class="tbody">
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
  mounted() {
    let counters = localStorage.getItem("counters");
    if(counters)
      this.counters = JSON.parse(counters);
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
  },
  watch: {
    counters: {
      handler() {
        localStorage.setItem("counters", JSON.stringify(this.counters));
      },
      deep: true
    }
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

button {
  background-color: #757575;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #9e9e9e;
}

button:active {
  transform: translateY(1px);
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
  background-color: #2e2e2e;
  color: white;
  font-weight: 900;
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
  background-color: #505050;
  font-size: 1.25em;
}

.tr:hover {
  border: 1px solid #ffffff;;
}

 .tr:nth-child(odd) {
  background-color: #666666;
}

 .tr.fading {
  background-color: rgb(112, 69, 69);
}
  .tr.fading:nth-child(odd){
  background-color: rgb(156, 90, 90);
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
