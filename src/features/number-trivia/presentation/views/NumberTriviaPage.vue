<template>
  <div class="number-trivia-page">
    <h1>Number Trivia</h1>
    <div class="number">
      <span>{{$store.state.numberTriviaStore.number}}</span>
    </div>
    <div class="trivia">
      <span>{{$store.state.numberTriviaStore.trivia}}</span>
    </div>
    <div class="input-form">
      <div>
        <input v-model="inputNumber" type="text" placeholder="Input Number"/>
      </div>

      <div class="buttons">
        <button @click="$store.dispatch('getExactNumberTrivia' ,$store.state.numberTriviaStore.inputNumber)">Find Number Trivia</button>
        <button @click="$store.dispatch('getRandomNumberTrivia',)">Random Number Trivia</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  mutations:{
    setInputNumber(state:any, value:string){
      state.inputNumber = value;
      console.log(value);
    }
  },
  computed: {
    
  },
  methods:{
    setInputNumber({commit}:any){
      commit('updateMessage');
    }
  }

}


</script>

<style>
.number {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.trivia {
  font-size: 2rem;
  margin-bottom: 3rem;
}

.input-form input {
  font-size: 2rem;
  margin-bottom: 1em;
}

.buttons button{
    font-size: 1.5em;
}
</style>

    
