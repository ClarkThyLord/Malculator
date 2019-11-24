<template>
  <nav>
    <div class="uk-margin-small uk-margin-left uk-navbar-left">
      <a class="uk-margin-right uk-navbar-item uk-logo uk-visible@m">
        <img src="../../public/icon.svg" width="40" uk-svg />
      </a>
      <div class="uk-flex">
        <Input
          title="Function<span class='uk-invisible'> \ Función: (F)</span>"
          placeholder="Function..."
          valid_type="function"
        >
          <span slot="title">
            <span class="uk-hidden@m">Function: (F)</span>
            <span class="uk-visible@m">Function\ Función: (F)</span>
          </span>
        </Input>
        <Input
          title="Starting Range \ Rango de Inicio: (A)"
          placeholder="Starting range..."
          valid_type="number"
        >
          <span slot="title">
            <span class="uk-hidden@m">Starting Range: (A)</span>
            <span class="uk-visible@m">Starting Range \ Rango de Inicio: (A)</span>
          </span>
        </Input>
        <Input placeholder="Ending range..." valid_type="function">
          <span slot="title">
            <span class="uk-hidden@m">Ending Range: (B)</span>
            <span class="uk-visible@m">Ending Range \ Rango de Finalización: (B)</span>
          </span>
        </Input>
        <Input placeholder="Iteration count..." valid_type="function">
          <span slot="title">
            <span class="uk-hidden@m">Iterations: (N)</span>
            <span class="uk-visible@m">Iterations \ Iteraciones: (N)</span>
          </span>
        </Input>
      </div>
    </div>

    <div class="uk-margin-small uk-margin-right uk-navbar-right">
      <a href="https://github.com/ClarkThyLord/Malculator" target="_blank">
        <span uk-icon="icon: github; ratio: 2"></span>
      </a>
    </div>
  </nav>
</template>

<script>
import Input from "./Input";

export default {
  name: "Toolbar",
  components: {
    Input
  },
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
      let func = undefined;
      if (this.func != "") {
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

      let A = undefined;
      if (this.A != "") {
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

      let B = undefined;
      if (this.B != "") {
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

      let N = undefined;
      if (this.N != "") {
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

      if (this.func_valid && this.A_valid && this.B_valid && this.N_valid) {
        console.log("updating!");
        this.$emit("update", func, A, B, N);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>