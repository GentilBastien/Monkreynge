<script setup>
import { ref } from 'vue';
import Contenu from '../components/ContenuComponent.vue';
import Historique from '../components/HistoriqueComponent.vue';

const gauche = ref(true);
</script>

<template>
    <div class="nav-btns">
        <label>
            <input type="radio" name="content-type" value="content1" @click="(gauche = true)" checked>
            <i>Mon contenu</i>
        </label>
        <label>
            <input type="radio" name="content-type" value="content2" @click="(gauche = false)">
            <i>Historique</i>
        </label>
    </div>
    <Contenu v-if="gauche"/>
    <Historique v-if="!gauche"/>
</template>

<style scoped>
.nav-btns {
    margin: 60px auto;
    width: fit-content
}

input[type="radio"] {
    visibility: hidden;
}

label {
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
}

i {
    font-style: normal;
    font-size: 32px;
    font-weight: bold;
    color: white;
}

label:nth-child(1) i {
    padding-right: 100px;
}

label:nth-child(2) i {
    border-left: 2px solid white;
    padding-left: 120px;
}

input[type="radio"]:checked+i {
    color: var(--main-col);
}
</style>