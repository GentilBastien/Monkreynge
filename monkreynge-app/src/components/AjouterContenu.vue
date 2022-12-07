<script setup>
import { reactive, ref } from 'vue';
import Tag from './AjouterContenuTag.vue';
const labelList = reactive([
    { label: "Génant", nb: 9, visible: false },
    { label: "Cringe", nb: 1890, visible: false },
    { label: "Dérangeant", nb: 29, visible: false },
    { label: "Déplaisant", nb: 61, visible: false },
    { label: "Désagréable", nb: 15, visible: false },
    { label: "Embarrassant", nb: 112, visible: false },
    { label: "Incommodant", nb: 320, visible: false },
    { label: "Malaisant", nb: 59814, visible: false },
    { label: "Intolérable", nb: 1, visible: false },
    { label: "Envahissant", nb: 71, visible: false },
    { label: "Odieux", nb: 20, visible: false },
    { label: "Repoussant", nb: 39, visible: false },
]);

function popInvisibleLabels() {
    return labelList.filter(item => !item.visible);
}

function isThereMore() {
    return popInvisibleLabels().length > 0;
}

function itemSelected(event) {
    setVisible(event.target.value);
    event.target.value = '+';
}

function setVisible(label) {
    labelList.find(item => item.label == label).visible = true;
}
</script>

<template>
    <div class="main-add-content">
        <div id="file-container">
            <span class="lab left">Sélectionner un fichier :</span>
            <input type="file" name="file" id="file" class="inputfile" />
            <label for="file" class="lab right">Parcourir...</label>
        </div>
        <div>
            <input type="text" name="input-titre" class="form" id="titre" value="Titre">
            <input type="text" name="input-description" class="form" id="description" value="Description">
        </div>
        <div id="tags">
            <span class="formTitle">Ajouter des tags :</span>
            <Tag v-for="item in labelList" :model="item" />
            <select v-if="isThereMore()" @change="itemSelected($event)">
                <option disabled selected>+</option>
                <option v-for="item in popInvisibleLabels()" >{{item.label}}</option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.main-add-content {
    height: 100%;
    width: 40%;
    border: 1px solid #575757;
    border-radius: 15px;
    background-color: #cacaca;
    margin: 30px auto 0 auto;
}

#file-container {
    width: fit-content;
    margin: 30px auto 0 auto;
}

.inputfile {
	display: none;
}

.lab {
    color: black;
    font-size: 20px;
    margin: 0;
}

.left {
    margin-right: 20px;
}
.inputfile + label {
    color: black;
    background-color: white;
    border-radius: 15px;
    padding: 20px 100px;
    cursor: pointer;
}

#tags, .form {
    color: black;
    font-size: 32px;
    border: 1px solid #575757;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    width: calc(100% - 40px);
    background-color: var(--main-col-transp25);
}

#titre {
    margin: 40px 10px 10px 10px ;
}

.form {
    display: block;
    color: rgba(0, 0, 0, 0.56);
}

.formTitle {
    display: block;
}

select {
    appearance: none;
    text-align: center;
    width: 25px;
    height: 25px;
}
</style>