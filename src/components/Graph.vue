<template>
  <div id="jxgbox" class="jxgbox"></div>
</template>
    
<script>
export default {
  name: "Graph",
  data: function() {
    return {
      board: undefined,
      func: undefined,
      rsum: undefined
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
    update_graph: function(F, A, B, N) {
      if (this.func) this.func.remove();
      if (this.rsum) this.rsum.remove();

      this.func = this.board.create("functiongraph", [
        function(x) {
          return F(x);
        },
        A,
        B
      ]);

      this.rsum = this.board.create(
        "riemannsum",
        [
          function(x) {
            return F(x);
          },
          N,
          "trapezodial",
          A,
          B
        ],
        { fillColor: "#ffff00", fillOpacity: 0.3 }
      );
    }
  }
};
</script>
