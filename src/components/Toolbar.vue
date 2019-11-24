<template>
  <nav>
    <div class="uk-margin-small uk-margin-left uk-navbar-left">
      <a class="uk-margin-right uk-navbar-item uk-logo uk-visible@l">
        <img src="../../public/icon.svg" width="40" uk-svg />
      </a>
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
  methods: {
    updated: function() {
      if (
        this.$refs.F.valid &&
        this.$refs.A.valid &&
        this.$refs.B.valid &&
        this.$refs.N.valid
      ) {
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
