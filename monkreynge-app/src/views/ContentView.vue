<script setup>

</script>

<template>
    <div class="nav-btns">
        <label>
            <input type="radio" name="content-type" value="content1" checked>
            <i>Mon contenu</i>
        </label>
        <label>
            <input type="radio" name="content-type" value="content2">
            <i>Contenu noté</i>
        </label>
    </div>
</template>

<style scoped>
.nav-btns {
    margin: 30px auto;
    width: fit-content
}

input[type="radio"] {
    visibility: hidden;
}

label {
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
}

i {
    font-style: normal;
    font-size: 32px;
    font-weight: bold;
    color: white;
}

label:nth-child(1) i {
    padding-right: 100px;
}

label:nth-child(2) i {
    border-left: 2px solid white;
    padding-left: 120px;
}

input[type="radio"]:checked+i {
    color: var(--main-col);
}
</style>