<template>
    <div>
        <input v-model="func" placeholder="function here..." />
        <input v-model="A" placeholder="add multiple lines"/>
        <button @click="process">Enviar A</button>
    </div>
</template>

<script>
import App from "../App.vue";

export default {
    data: function (){
        return {
            func: '',
            A: ''
        }
    }, 
    methods: {
        process: function () {
            console.log(window.integral.trap(1, 2, 12, window.mathjs.evaluate(this.func)));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>