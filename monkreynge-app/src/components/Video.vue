<script setup>
import { reactive, ref } from 'vue';
defineProps({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    toggle: {
        type: Function,
        required: true
    },
});

const slider = reactive(
    { nom: 'Note', value: 5 }
);

function img() {
    return slider.value == 10 ? 'url("/src/components/icons/ultra_cringed.png")' : 'url("/src/components/icons/monk.png")';
}
</script>

<template>
    <div class="vdo">
        <div id="spans">
            <span class="txt">{{ titre }}</span>
            <span class="txt">{{ description }}</span>
        </div>
        <img id="vdo" src="./icons/bigvid.png" alt="video" />
        <div class="icons">
            <img src="./icons/conv.png" alt="conv" @click="toggle"/>
            <img src="./icons/share.png" alt="share" @click="toggle"/>
            <img src="./icons/report.png" alt="report" @click="toggle"/>
        </div>
        <div class="slidecontainer">
            <input type="range" min="1" max="10" v-model="slider.value" class="slider">
            <span class="txt" id="note">Votre note {{ slider.value }}/10</span>
        </div>
    </div>
</template>

<style scoped>
.vdo {
    float: left;
    position: relative;
    background-color: black;
    width: 30%;
    height: calc(100vh - 100px);
}

#spans {
    width: 80%;
    margin: 20px auto;
    line-height: 20px;
}

.txt {
    display: block;
    color: white;
    font-size: 15px;
}

.txt:nth-child(1) {
    font-size: 20px;
    margin-bottom: 5px;
}

.vdo img#vdo {
    display: block;
    margin: 40% auto;
    cursor: pointer;
}
.vdo img#vdo:hover {
    transition: transform .2s;
    transform: scale(1.1);
}

.icons {
    position: absolute;
    right: 20px;
    bottom: 150px;
}

.icons img {
    display: block;
    width: 50px;
    cursor: pointer;
}

.icons img:hover {
    transition: transform .2s;
    transform: scale(1.1);
    filter: invert(71%) sepia(10%) saturate(2472%) hue-rotate(101deg) brightness(88%) contrast(79%);
}

.slidecontainer {
    position: absolute;
    width: 80%;
    bottom: 20px;
    left: 10%;
}

.slider {
    appearance: none;
    width: 100%;
    height: 5px;

    border-radius: 5px;
    background: #ffffff;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 69px;
    height: 69px;
    border: 5px solid white;
    border-radius: 60px;
    background: v-bind('img()');
    cursor: pointer;
}

#note {
    margin-top: 40px;
}
</style>