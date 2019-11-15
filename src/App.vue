<template>
  <div id="app">
    <nav
      class="uk-width-1-1 uk-navbar-container uk-position-absolute"
      style="z-index: 10000;"
      uk-navbar
    >
      <div class="uk-margin-medium uk-navbar-left">
        <Input />
      </div>
    </nav>
    <main class="uk-width-1-1 uk-height-1-1 uk-background-default">
      <div id="jxgbox" class="jxgbox" style="width:100%; height:100%;"></div>
    </main>
    <div
      style="z-index: 10001;"
      class="uk-background-default uk-overlay-default uk-position-cover app-overlay"
      :class="{'uk-invisible': debugging,'uk-animation-fade uk-animation-reverse': AppOverlay, 'uk-invisible': AppOverlayHide}"
    >
      <div class="uk-position-center">
        <img
          alt="Malculator"
          src="../public/icon.svg"
          :class="{'uk-animation-scale-up uk-animation-reverse': AppOverlayIcon}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import integral from "./core/integral.js";
import JXG from "jsxgraph";

export default {
  name: "app",
  components: {
    Input
  },
  data: function() {
    return {
      debugging: false,
      AppOverlay: false,
      AppOverlayIcon: false,
      AppOverlayHide: false
    };
  },
  mounted: function() {
    if (!this.debugging) {
      setTimeout(() => {
        this.AppOverlayIcon = true;
        setTimeout(() => {
          this.AppOverlay = true;
          setTimeout(() => {
            this.AppOverlayHide = true;
          }, 500);
        }, 300);
      }, 1500);
    }

    var brd = JXG.JSXGraph.initBoard("jxgbox", {
      pan: {
        enabled: true,
        needShift: false
      },
      zoom: {
        wheel: true,
        needShift: false
      }
    });
    brd.createElement("axis", [[0, 0], [1, 0]], { strokeColor: "red" });
    brd.createElement("axis", [[0, 0], [0, 1]], {
      strokeColor: "blue",
      label: { strokeColor: "white" }
    });
    brd.create("functiongraph", [
      function(x) {
        return x ** 2;
      }
    ]);
  }
};
</script>

<style>
</style>
