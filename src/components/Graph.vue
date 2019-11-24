<template>
  <div id="jxgbox" class="jxgbox"></div>
</template>
    
<script>
export default {
  name: "Graph",
  data: function() {
    return {
      board: undefined,
      func: undefined
    };
  },
  mounted: function() {
    this.board = JXG.JSXGraph.initBoard("jxgbox", {
      pan: {
        enabled: true,
        needShift: false
      },
      zoom: {
        wheel: true,
        needShift: false
      }
    });
    this.board.createElement("axis", [[0, 0], [1, 0]], { strokeColor: "red" });
    this.board.createElement("axis", [[0, 0], [0, 1]], {
      strokeColor: "blue",
      label: { strokeColor: "white" }
    });
  },
  methods: {
    update_graph: function(func, A, B, N) {
      if (this.func) this.func.remove();

      this.func = this.board.create("functiongraph", (x, y) => {
        return func(x);
      });
    }
  }
};
</script>
