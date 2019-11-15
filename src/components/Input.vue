<template>
    <div>
        <form @submit.prevent="process">
            <input v-model="func" placeholder="function here..." />
            <input v-model="A" placeholder="add A"/>
            <input v-model="B" placeholder="add B"/>
            <input v-model="N" placeholder="add N"/>
            <button type="submit">Enviar</button>
        </form>     
    </div>
</template>

<script>
import App from "../App.vue";

export default {
    data: function (){
        return {
            func: '',
            A: '',
            B: '',
            N: ''
        }
    }, 
    methods: {
        process: function () {
            console.log(window.integral.trap(window.mathjs.evaluate(this.A), window.mathjs.evaluate(this.B), window.mathjs.evaluate(this.N), window.mathjs.evaluate(this.func)));
            console.log(this.A);
            console.log(this.B);
            console.log(this.N);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>