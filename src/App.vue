<template>
  <div id="app">
    <main>
      <Input />
    </main>
    <div
      class="uk-background-default uk-overlay-default uk-position-cover app-overlay"
      :class="{'uk-invisible': debugging,'uk-animation-fade uk-animation-reverse': AppOverlay}"
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

export default {
  name: "app",
  components: {
    Input
  },
  data: function() {
    return {
      debugging: true,
      AppOverlay: false,
      AppOverlayIcon: false
    };
  },
  mounted: function() {
    if (debugging) {
      setTimeout(() => {
        this.AppOverlayIcon = true;
        setTimeout(() => {
          this.AppOverlay = true;
        }, 200);
      }, 1500);
    }
  }
};
</script>

<style>
</style>
