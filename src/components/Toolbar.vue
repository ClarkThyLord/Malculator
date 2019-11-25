<template>
  <nav>
    <div class="uk-margin-small uk-margin-left uk-navbar-left">
      <a class="uk-margin-right uk-navbar-item uk-logo uk-visible@l">
        <img src="../../public/icon.svg" width="40" uk-svg />
      </a>
      <div class="uk-flex uk-flex-wrap">
        <div class="uk-flex">
          <Input
            ref="F"
            title="Function<span class='uk-invisible'> \ Función: (F)</span>"
            placeholder="Function..."
            valid_type="function"
            @updated="updated"
          >
            <span slot="title">
              <span class="uk-hidden@l">Function: (F)</span>
              <span class="uk-visible@l">Function\ Función: (F)</span>
            </span>
          </Input>
          <Input
            ref="A"
            title="Starting Range \ Rango de Inicio: (A)"
            placeholder="Starting range..."
            type="number"
            valid_type="number"
            @updated="updated"
          >
            <span slot="title">
              <span class="uk-hidden@l">Starting Range: (A)</span>
              <span class="uk-visible@l">Starting Range \ Rango de Inicio: (A)</span>
            </span>
          </Input>
          <Input
            ref="B"
            placeholder="Ending range..."
            type="number"
            valid_type="number"
            @updated="updated"
          >
            <span slot="title">
              <span class="uk-hidden@l">Ending Range: (B)</span>
              <span class="uk-visible@l">Ending Range \ Rango de Finalización: (B)</span>
            </span>
          </Input>
          <Input
            ref="N"
            placeholder="Iteration count..."
            type="number"
            valid_type="number"
            @updated="updated"
          >
            <span slot="title">
              <span class="uk-hidden@l">Iterations: (N)</span>
              <span class="uk-visible@l">Iterations \ Iteraciones: (N)</span>
            </span>
          </Input>
        </div>
        <div class="uk-flex uk-margin-auto">
          <div class="uk-margin-right">
            <label class="uk-form-label">Trapezoide:</label>
            <div class="uk-form-controls">
              <input
                type="text"
                disabled="true"
                v-model="trapezoide"
                style="max-width: 130px;"
                class="uk-input"
              />
            </div>
          </div>
          <div class="uk-margin-right">
            <label class="uk-form-label">Simpson 1/3:</label>
            <div class="uk-form-controls">
              <input
                type="text"
                disabled="true"
                v-model="simpson_1_3"
                style="max-width: 130px;"
                class="uk-input"
              />
            </div>
          </div>
          <div class="uk-margin-right">
            <label class="uk-form-label">Simpson 3/8:</label>
            <div class="uk-form-controls">
              <input
                type="text"
                disabled="true"
                v-model="simpson_3_8"
                style="max-width: 130px;"
                class="uk-input"
              />
            </div>
          </div>
        </div>
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
      trapezoide: false,
      simpson_1_3: -1,
      simpson_3_8: 0
    };
  },
  methods: {
    updated: function() {
      if (
        this.$refs.F.valid &&
        this.$refs.A.valid &&
        this.$refs.B.valid &&
        this.$refs.N.valid
      ) {
        this.trapezoide = window.integral.trapezoide(
          this.$refs.A.real_value,
          this.$refs.B.real_value,
          this.$refs.N.real_value,
          this.$refs.F.real_value
        );

        this.simpson_1_3 = window.integral.simpson_1_3(
          this.$refs.A.real_value,
          this.$refs.B.real_value,
          this.$refs.N.real_value,
          this.$refs.F.real_value
        );

        this.simpson_3_8 = window.integral.simpson_3_8(
          this.$refs.A.real_value,
          this.$refs.B.real_value,
          this.$refs.N.real_value,
          this.$refs.F.real_value
        );

        this.$emit(
          "updated",
          this.$refs.F.real_value,
          this.$refs.A.real_value,
          this.$refs.B.real_value,
          this.$refs.N.real_value
        );
      }
    }
  }
};
</script>
