<script setup>
defineProps({
    path: {
        type: String,
        required: true
    },
    texte: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <img :src="path" alt="icon" />
        <span class="txt">{{ texte }}</span>
    </div>
</template>

<style scoped>
.txt {
    display: block;
    color: white;
    font-size: 20px;
    width: 100%;
    text-align: center;
}

.methods div {
    float: left;
    width: 29.5%;
    height: 150px;
    margin: 10px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.33);
}

.methods div img {
    display: block;
    margin: 0 auto;
}
</style>