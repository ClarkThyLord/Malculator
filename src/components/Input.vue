<template>
  <form class="uk-flex" @submit.prevent="process">
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Function \ Función:</label>
      <div class="uk-form-controls">
        <input type="text" v-model="func" placeholder="Function..." class="uk-input" />
      </div>
    </div>
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Starting Range \ Rango de Inicio: (A)</label>
      <div class="uk-form-controls">
        <input type="number" v-model="A" placeholder="Starting range..." class="uk-input" />
      </div>
    </div>
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Ending Range \ Rango de Finalización: (B)</label>
      <div class="uk-form-controls">
        <input type="number" v-model="B" placeholder="Ending range..." class="uk-input" />
      </div>
    </div>
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Iterations \ Iteraciones: (N)</label>
      <div class="uk-form-controls">
        <input type="number" v-model="N" placeholder="Iteration count..." class="uk-input" />
      </div>
    </div>
    <button type="submit" class="uk-button uk-button-default">Calculate</button>
  </form>
</template>

<script>
import App from "../App.vue";

export default {
  data: function() {
    return {
      func: "",
      A: "",
      B: "",
      N: ""
    };
  },
  methods: {
    process: function() {
      console.log(
        window.integral.trap(
          window.mathjs.evaluate(this.A),
          window.mathjs.evaluate(this.B),
          window.mathjs.evaluate(this.N),
          window.mathjs.evaluate(this.func)
        )
      );
      console.log(this.A);
      console.log(this.B);
      console.log(this.N);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>