<template>
    <!-- <input @model="textA" placeholder="add multiple lines"></input> -->
    <button @click='btnA'>Enviar A</button>
</template>

<script>
import App from "../App.vue";
import integral from "../core/integral.js";

export default {
    data(){
        return {
            textA: ' '
        }
    }, 
    methods: {
        btnA: function(event) {
            alert('A')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>