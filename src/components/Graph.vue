<template>
  <main class="uk-width-1-1 uk-height-1-1 uk-background-default">
    <div id="jxgbox" class="jxgbox" style="width:100%; height:100%;"></div>
  </main>
</template>
    
<script>
export default {
  name: "Graph",
  data: function() {
    return {
      func: undefined
    };
  },
  mounted: function() {
    let brd = JXG.JSXGraph.initBoard("jxgbox", {
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