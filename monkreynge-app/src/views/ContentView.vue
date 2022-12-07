<script setup>
import { ref } from 'vue';
import Contenu from '../components/ContenuComponent.vue';
import Historique from '../components/HistoriqueComponent.vue';
import Bas from '../components/AjouterContenu.vue';

const gauche = ref(true);
const bas = ref(false);
const arrowDown = "/src/components/icons/filled_arrow_down.png";
const arrowUp = "/src/components/icons/filled_arrow_up.png";
</script>

<template>
    <div v-if="!bas" class="nav-btns">
        <label>
            <input type="radio" name="content-type" value="content1" @click="(gauche = true)" checked>
            <i>Mon contenu</i>
        </label>
        <label>
            <input type="radio" name="content-type" value="content2" @click="(gauche = false)">
            <i>Historique</i>
        </label>
    </div>
    <div v-if="!bas" id="bloc">
        <Transition name="fade">
            <Contenu v-if="gauche" />
        </Transition>

        <Transition name="fade">
            <Historique v-if="!gauche" />
        </Transition>
    </div>

    <div id="add-content">
        <div @click="(bas = !bas)">
            <img :src="bas ? arrowDown : arrowUp" alt="arrow">
            <span>Ajouter contenu</span>
        </div>
        <Bas v-if="bas" />
    </div>

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

#bloc {
    overflow-y: auto;
    width: 50vw;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #575757;
    border-radius: 15px;

    height: 55vh;
}

#add-content {
    margin-top: 20px;
    background-color: #D9D9D9;
    border-radius: 20px 20px 0 0;
    height: 100vh;
}

#add-content div {
    padding: 20px;
}

#add-content div:hover {
    background-color: #f9f9f9;
    border-radius: 20px 20px 0 0;
}

#add-content div img {
    display: block;
    width: 50px;
    margin: 0 auto;
}

#add-content div span {
    display: block;
    width: fit-content;
    margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>