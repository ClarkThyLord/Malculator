<template>
  <div id="app">
    <img alt="Vue logo" src="../public/icon.svg" />
    <Input></Input>
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
    return{
      result: integral.trap(1, 2, 12, function (x) { return x * Math.log(x) })
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
