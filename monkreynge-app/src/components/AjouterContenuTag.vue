<script setup>
import { ref } from 'vue';
defineProps({
    model: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <span v-if="model.visible" class="tag" >
        {{ model.label }}
        <span class="tag-nb">({{model.nb}})</span>
        <span class="remove-tag" @click="(model.visible = false)">&#10005;</span>
    </span>
</template>

<style scoped>
    .tag {
        padding: 5px 0 5px 5px;
        border-radius: 10px;
        font-size: 20px;
        margin-right: 10px;
        color: black;
        white-space: nowrap;
        background-color: var(--main-col-transp75);
    }

    .tag-nb {
        font-size: smaller;
    }
    .remove-tag {
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 10px;
    }

    .remove-tag:hover {
        cursor: pointer;
        background-color: #ffffff84;
    }
</style>