<script setup>
import Nav from '../components/Nav.vue';
import Video from '../components/Video.vue';
</script>

<template>
    <Nav />
        <div class="bloc-passage" id="precedant">
            <img src="@/components/icons/precedant.png" alt="precedant" class="arrow">
        </div>

        <Video titre="Titre de la vidéo" description="Ceci est une courte description de la vidéo"></Video>

        <div class="bloc-passage" id="suivant">
            <img src="@/components/icons/suivant.png" alt="suivant" class="arrow">
        </div>

</template>

<style scoped>
.bloc-passage {
    float: left;
    background-color: #363434;
    height: calc(100vh - 100px);
    width: 35%;
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
    margin-left: 80%;
}

#suivant img {
    float: right;
    margin-right: 80%;
}
</style>
