<script setup>
import { ref } from 'vue';
import Comp from './BlocSignalerComponent.vue';
</script>

<template>
    <div>
        <span class="zioup" id="title">Partager la vidéo</span>
    </div>

    <div class="methods">
        <Comp path="/src/components/icons/link.png" texte="Copier le lien" />
        <Comp path="/src/components/icons/mail.png" texte="Envoyer par message privé" />
        <Comp path="/src/components/icons/share.png" texte="Partager via..." />
    </div>
</template>

<style scoped>
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