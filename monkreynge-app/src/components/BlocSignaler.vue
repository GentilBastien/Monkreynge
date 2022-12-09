<script setup>
import { ref } from 'vue';
import Comp from './BlocSignalerComponent.vue';
defineProps({
    toggle: {
        type: Function,
        required: true
    }
});
</script>

<template>
    <div class="header">
        <span class="zioup" id="title">Partager la vidéo</span>
        <span id="close" @click="toggle">&#10005;</span>
    </div>

    <div class="methods">
        <Comp path="/src/components/icons/link.png" texte="Copier le lien" />
        <Comp path="/src/components/icons/mail.png" texte="Envoyer par message privé" />
        <Comp path="/src/components/icons/share.png" texte="Partager via..." />
    </div>
</template>

<style scoped>
.header {
    position: relative;
}

#close {
    position: absolute;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px 8px;
    color: white;
    top: 0;
    right: 20px;
    transform: scale(1);
    transition: transform 0.2s;
    cursor: pointer;
}

#close:hover {
    background: rgb(207, 78, 78);
    transform: scale(1.2);
    transition: transform 0.2s;
}
.zioup {
    display: block;
    color: white;
    font-size: 20px;
    width: 100%;
    text-align: center;
}

#title {
    margin-top: 20px;
    font-weight: bold;
    font-size: 30px;
}

.methods {
    margin-top: 40%;
}
</style>