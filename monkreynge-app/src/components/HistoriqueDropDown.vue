<script setup>
import { ref } from 'vue';
defineProps({
    titre: {
        type: String,
        required: true
    }
})
const isDown = ref(false);

const semiRounded = "15px 15px 0 0";
const fullRounded = "15px";
const arrowRight = "/src/components/icons/arrow_right.png";
const arrowDown = "/src/components/icons/arrow_down.png";

</script>

<template>
    <div id="bloc-dropdown">
        <button @click="(isDown = !isDown)" :style="{borderRadius: isDown ? semiRounded : fullRounded}">
            <span>{{ titre }}</span>
            <img :src="isDown ? arrowDown : arrowRight" alt="arrow">
        </button>
        <Transition name="slide-fade">
            <div v-if="isDown" class="bloc-dropdown-content">
                <slot name="vdo"></slot>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
#bloc-dropdown {
    margin: 20px;
}

button {
    position: relative;
    width: 100%;
    height: 54px;
    background-color: #4F4F4F;
    border: 1px solid rgba(255, 255, 255, 0.33);
}

button:hover {
    background-color: #7f7f7f;
}

button span {
    float: left;
    color: white;
    font-size: 20px;
}

button img {
    float: right;
    width: 30px;
}

.bloc-dropdown-content {
    background-color: #4F4F4F;
    border-left: 1px solid rgba(255, 255, 255, 0.33);
    border-right: 1px solid rgba(255, 255, 255, 0.33);
    border-bottom: 1px solid rgba(255, 255, 255, 0.33);
}
</style>