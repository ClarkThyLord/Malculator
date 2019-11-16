<template>
  <div
    class="uk-background-default uk-overlay-default uk-position-cover app-overlay"
    :class="{'uk-animation-fade uk-animation-reverse': AppOverlay, 'uk-invisible': AppOverlayHide}"
  >
    <div class="uk-position-center">
      <img
        alt="Malculator"
        src="../../public/icon.svg"
        :class="{'uk-animation-scale-up uk-animation-reverse': AppOverlayIcon}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  data: function() {
    return {
      AppOverlay: false,
      AppOverlayIcon: false,
      AppOverlayHide: false
    };
  },
  mounted: function() {
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
};
</script>

<style>
</style>