<script setup>
import { ref } from 'vue';
import Nav from '../components/Nav.vue';
import Video from '../components/Video.vue';
import Signal from '../components/BlocSignaler.vue';

let blocPassageWidth = "35%";
let arrowMarginOffset = "80%";
let opacityContent = "1";
const isThereBloc = ref(false);
function toggleBloc() {
    isThereBloc.value = !isThereBloc.value;
    blocPassageWidth = isThereBloc.value ? "20%" : "35%";
    arrowMarginOffset = isThereBloc.value ? "60%" : "80%";
    opacityContent = isThereBloc.value ? "0.5" : "1";
}
</script>

<template>
    <Nav />
        <div class="bloc-passage" id="precedant">
            <img src="@/components/icons/precedant.png" alt="precedant" class="arrow">
        </div>

        <Video id="Content" titre="Titre de la vidéo" description="Ceci est une courte description de la vidéo" :toggle="toggleBloc" />

        <Transition name="slide-fade-horizontal">
            <div v-if="isThereBloc" class="comm">
                <Signal :toggle="toggleBloc" />
            </div>
        </Transition>

        <div class="bloc-passage" id="suivant">
            <img src="@/components/icons/suivant.png" alt="suivant" class="arrow">
        </div>

</template>

<style scoped>
#Content {
    opacity: v-bind('opacityContent');
}
.comm {
    float: left;
    margin: 20px;   
    height: calc(100vh - 140px);
    background-color: #444444;
    width: 30%;
    border-radius: 30px;
    box-shadow: -8px 8px 39px 2px #000000;
}
.bloc-passage {
    float: left;
    background-color: #363434;
    height: calc(100vh - 100px);
    width: v-bind('blocPassageWidth');
}

#precedant:hover {
    box-shadow: inset 200px 0px 1000px 0px var(--main-col);
}

#suivant:hover {
    box-shadow: inset -200px 0px 1000px 0px var(--main-col);
}

.arrow {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0;
    margin-top: calc(50vh - 50px);
    cursor: pointer;
}

.arrow:hover {
    transition: transform .2s;
    transform: scale(1.1);
}

#precedant img {
    float: left;
    margin-left: v-bind('arrowMarginOffset');
}

#suivant img {
    float: right;
    margin-right: v-bind('arrowMarginOffset');
}
</style>
