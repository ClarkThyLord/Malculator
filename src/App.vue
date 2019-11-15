<template>
  <div id="app">
    <nav
      class="uk-position-absolute uk-width-1-1 uk-navbar-container"
      style="z-index: 10000;"
      uk-navbar
    >
      <div class="uk-margin-medium uk-navbar-left">
        <Input />
      </div>

      <div class="uk-margin-medium uk-navbar-right"></div>
    </nav>

    <main class="uk-width-1-1 uk-height-1-1">
      <Graph />
    </main>

    <Overlay />
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
  }
};
</script>

<style>
</style>
