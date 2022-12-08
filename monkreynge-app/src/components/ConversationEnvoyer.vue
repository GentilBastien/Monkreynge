<script setup>
import { ref } from 'vue';
defineProps({
    send: {
        type: Function,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

})

const text = ref('Envoyer un message');
</script>

<template>
    <div class="sendMsg">
        <img src="./icons/mic.png" alt="mic">
        <img src="./icons/picture.png" alt="pic">
        <img src="./icons/monk.png" alt="monk">
        <input type="text" v-model="text">
        <img src="./icons/send.png" alt="send" @click="send(username, text)">
    </div>
</template>

<style scoped>
.sendMsg {
    position: fixed;
    bottom: 0;
    background-color: rgb(21, 21, 21);
    width: 40%;
}

.sendMsg img {
    height: 60px;
    vertical-align: middle;
    transform: scale(1);
    transition: transform 0.2s;
    margin: 0 10px;
}
.sendMsg img:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
}

input {
    background-color: #323030;
    border-radius: 15px;
    height: 50px;
    margin: 5px 10px;
    color: rgb(188, 188, 188);
    font-size: 20px;
    width: 50%;
}
</style>