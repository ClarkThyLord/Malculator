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
          type="number"
          valid_type="number"
        >
          <span slot="title">
            <span class="uk-hidden@m">Starting Range: (A)</span>
            <span class="uk-visible@m">Starting Range \ Rango de Inicio: (A)</span>
          </span>
        </Input>
        <Input placeholder="Ending range..." type="number" valid_type="function">
          <span slot="title">
            <span class="uk-hidden@m">Ending Range: (B)</span>
            <span class="uk-visible@m">Ending Range \ Rango de Finalización: (B)</span>
          </span>
        </Input>
        <Input placeholder="Iteration count..." type="number" valid_type="function">
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
  }
};
</script>
