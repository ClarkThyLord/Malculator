<template>
  <div id="app">
    <nav
      uk-navbar
      style="z-index: 10000;"
      class="uk-position-absolute uk-width-1-1 uk-navbar-container uk-box-shadow-small"
    >
      <div class="uk-margin-small uk-margin-left uk-navbar-left">
        <a class="uk-margin-right uk-navbar-item uk-logo">
          <img src="../public/icon.svg" width="40" uk-svg />
        </a>
        <Input v-on:update="update" />
      </div>

      <div class="uk-margin-small uk-margin-right uk-navbar-right">
        <a href="https://github.com/ClarkThyLord/Malculator" target="_blank">
          <span uk-icon="icon: github; ratio: 2"></span>
        </a>
      </div>
    </nav>

    <main class="uk-width-1-1 uk-height-1-1">
      <Graph ref="Graph" />
    </main>

    <Overlay style="z-index: 10001;" />
  </div>
</template>

<script>
import integral from "./core/integral.js";

import Input from "./components/Input.vue";
import Graph from "./components/Graph.vue";
import Overlay from "./components/Overlay.vue";

export default {
  name: "app",
  components: {
    Input,
    Graph,
    Overlay
  },
  data: function() {
    return {
      debugging: false
    };
  },
  methods: {
    update: function(func, A, B, N) {
      console.log("update");
      console.log(func);
      console.log(A);
      console.log(B);
      console.log(N);
      console.log(this.$refs.Graph);
      console.log(this.$refs.Graph.update_graph);
      this.$refs.Graph.update_graph(func, A, B, N);
    }
  }
};
</script>

<style>
</style>
