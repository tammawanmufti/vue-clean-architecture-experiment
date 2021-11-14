<template>
  <div>
    <div>
      <div>
        <h3>Question:</h3>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h5>
      </div>
      <div class="ans">
        <label class="radio">
          <input type="radio" name="brazil" value="brazil" />
          <span>Voluptates dolorum impedit cum similique quibusdam ad.</span>
        </label>
        <br />
        <label class="radio">
          <input type="radio" name="brazil" value="brazil" />
          <span>Vero itaque odit quas asperiores alias possimus.</span>
        </label>
        <br />
        <label class="radio">
          <input type="radio" name="brazil" value="brazil" />
          <span>Molestias facere nisi illo.</span>
        </label>
        <br />
        <label class="radio">
          <input type="radio" name="brazil" value="brazil" />
          <span>Repellat placeat iste, laborum!.</span>
        </label>
      </div>
    </div>
    <div class="button-style">
      <button type="button">Previous</button>
      <button type="button">Next</button>
    </div>
  </div>
</template>

<style scoped>
.ans {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.button-style {
  margin-top: 25px;
}
</style>