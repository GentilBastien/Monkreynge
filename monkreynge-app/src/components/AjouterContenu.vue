<script setup>
import { reactive, ref } from 'vue';
import Tag from './AjouterContenuTag.vue';
const labelList = reactive([
    { label: "Amusant", nb: 46, visible: true },
    { label: "Drôle", nb: 128, visible: true },
    { label: "Génant", nb: 9, visible: true },
    { label: "Cringe", nb: 1890, visible: true },
    { label: "Grinçant", nb: 561, visible: true },
    { label: "Dérangeant", nb: 29, visible: true },
    { label: "Agaçant", nb: 61, visible: true },
]);

const selected = ref('A');

function popInvisibleLabels() {
    return labelList.filter(item => !item.visible);
}

function setVisible(label) {
    labelList.find(item => item.label == label).visible = true;
}
</script>

<template>
    <div class="main-add-content">
        <div>
            <span>Sélectionner un fichier :</span>
            <input type="file" name="file-chooser" id="file-chooser">
        </div>
        <input type="text" name="input-titre" id="titre">
        <input type="text" name="input-description" id="description">
        <div id="tags">
            <span>Ajouter des tags :</span>
            <Tag v-for="item in labelList" :model="item" />
            <input type="button" value="+" id="add-tag" @click="popInvisibleLabels()">
            <select v-model="selected">
                <option disabled>Please select one</option>
                <option v-for="item in popInvisibleLabels()">{{item.label}}</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>

    </div>
</template>

<style scoped>
.main-add-content {
    height: 100%;
}
</style>