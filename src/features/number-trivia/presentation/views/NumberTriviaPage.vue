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
        <input type="text" placeholder="Input Number"/>
      </div>

      <div class="buttons">
        <button @click="$store.dispatch('getRandomNumberTrivia')"> Find Number Trivia</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


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

    
