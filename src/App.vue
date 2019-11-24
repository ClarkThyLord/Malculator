<template>
  <div id="app">
    <Toolbar
      uk-navbar
      style="z-index: 10000;"
      class="uk-position-absolute uk-width-1-1 uk-navbar-container uk-box-shadow-small"
    />

    <main class="uk-width-1-1 uk-height-1-1">
      <Graph ref="Graph" class="uk-width-1-1 uk-height-1-1 uk-background-default" />
    </main>

    <Overlay style="z-index: 10001;" />
  </div>
</template>

<script>
import integral from "./core/integral.js";

import Overlay from "./components/Overlay.vue";
import Toolbar from "./components/Toolbar.vue";
import Graph from "./components/Graph.vue";

export default {
  name: "app",
  components: {
    Overlay,
    Toolbar,
    Graph
  },
  methods: {
    update: function(func, A, B, N) {
      this.$refs.Graph.update_graph(func, A, B, N);
    }
  }
};
</script>

<style>
</style>
