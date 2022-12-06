<script setup>
defineProps({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div id="bloc-main">
        <img src="./icons/vid.png" alt="video">
        <div id="text">
            <span><b>Titre :</b> {{ titre }}</span>
            <span><b>Description :</b> {{ description }}</span>
            <span><b>Ma note :</b> {{ note }}/10</span>
        </div>
    </div>
</template>

<style scoped>
#bloc-main {
    position: relative;
    display: inline-block;
    background: var(--main-col);
    border-radius: 15px;
    margin: 20px;
    width: 188px;
    height: 300px;
}

#bloc-main img {
    display: block;
    width: 75%;
    margin: 0 auto;
    margin-top: 10px;
}

#bloc-main #text {
    position: absolute;
    bottom: 0px;
    overflow-y: auto;
    height: 80px;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.34);
    border-radius: 15px;
}

#bloc-main #text span {
    display: block;
    font-size: 16px;
    padding: 0 10px;
    word-wrap:break-word;
}
</style>