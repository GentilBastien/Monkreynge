<script setup>
import Drop from './ContenuDropDown.vue';
</script>

<template>
    <div id="bloc">
        <Drop titre="Décembre 2022"/>
        <Drop titre="Novembre 2022"/>
        <Drop titre="Octobre 2022"/>
        <Drop titre="Septembre 2022"/>
        <Drop titre="Août 2022"/>
        <Drop titre="Juillet 2022"/>
        <Drop titre="Juin 2022"/>
        <Drop titre="Mai 2022"/>
        <Drop titre="Avril 2022"/>
    </div>
    
</template>

<style scoped>
#bloc {
    overflow-y: auto;
    width: 50vw;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #575757;
    border-radius: 15px;

    height: 60vh;
}
</style>