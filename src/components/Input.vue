<template>
  <form class="uk-flex" @submit.prevent="process">
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Function \ Función:</label>
      <div class="uk-form-controls">
        <input
          type="text"
          v-model="func"
          placeholder="Function..."
          class="uk-input"
          :class="{'uk-form-success': func_valid, 'uk-form-danger': func_invalid}"
          @input="check"
        />
      </div>
    </div>
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Starting Range \ Rango de Inicio: (A)</label>
      <div class="uk-form-controls">
        <input
          type="number"
          v-model="A"
          placeholder="Starting range..."
          class="uk-input"
          :class="{'uk-form-success': A_valid, 'uk-form-danger': A_invalid}"
          @input="check"
        />
      </div>
    </div>
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Ending Range \ Rango de Finalización: (B)</label>
      <div class="uk-form-controls">
        <input
          type="number"
          v-model="B"
          placeholder="Ending range..."
          class="uk-input"
          :class="{'uk-form-success': B_valid, 'uk-form-danger': B_invalid}"
          @input="check"
        />
      </div>
    </div>
    <div class="uk-margin-right">
      <label class="uk-form-label" for="form-stacked-text">Iterations \ Iteraciones: (N)</label>
      <div class="uk-form-controls">
        <input
          type="number"
          v-model="N"
          placeholder="Iteration count..."
          class="uk-input"
          :class="{'uk-form-success': N_valid, 'uk-form-danger': N_invalid}"
          @input="check"
        />
      </div>
    </div>
    <!-- <div class="uk-margin-auto">
      <button type="submit" class="uk-button uk-button-default">Calculate</button>
    </div>-->
  </form>
</template>

<script>
import App from "../App.vue";

export default {
  data: function() {
    return {
      func: "",
      func_valid: undefined,
      func_invalid: undefined,
      A: "",
      A_valid: undefined,
      A_invalid: undefined,
      B: "",
      B_valid: undefined,
      B_invalid: undefined,
      N: "",
      N_valid: undefined,
      N_invalid: undefined
    };
  },
  methods: {
    check: function() {
      if (this.func != "") {
        let func = undefined;
        try {
          func = window.mathjs.evaluate(this.func);
        } catch (e) {
          // console.log(e.message);
        }
        this.func_valid = typeof func == "function" ? true : false;
        this.func_invalid = !this.func_valid;
      } else {
        this.func_valid = this.func_invalid = false;
      }

      if (this.A != "") {
        let A = undefined;
        try {
          A = window.mathjs.evaluate(this.A);
        } catch (e) {
          // console.log(e.message);
        }
        this.A_valid = typeof A == "number" ? true : false;
        this.A_invalid = !this.A_valid;
      } else {
        this.A_valid = this.A_invalid = false;
      }

      if (this.B != "") {
        let B = undefined;
        try {
          B = window.mathjs.evaluate(this.B);
        } catch (e) {
          // console.log(e.message);
        }
        this.B_valid = typeof B == "number" ? true : false;
        this.B_invalid = !this.B_valid;
      } else {
        this.B_valid = this.B_invalid = false;
      }

      if (this.N != "") {
        let N = undefined;
        try {
          N = window.mathjs.evaluate(this.N);
        } catch (e) {
          // console.log(e.message);
        }
        this.N_valid = typeof N == "number" ? true : false;
        this.N_invalid = !this.N_valid;
      } else {
        this.N_valid = this.N_invalid = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>