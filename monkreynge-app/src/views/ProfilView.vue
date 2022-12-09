<script setup>
import Nav from '../components/Nav.vue';
</script>

<template>
    <Nav />
    <div class="icons">
        <img src="@/components/icons/settings.png" alt="settings">
        <a href="/">
            <img src="@/components/icons/logout.png" alt="logout" />
        </a>
    </div>

    <div class="profile">
        <span id="title">jaco38</span>
        <img src="@/components/icons/pp.png" alt="pp">
        <span>NPC random pisslow</span>
        <span>nb vidéos notées : 10</span>
        <span>note moyenne contenu : 2/10</span>
    </div>
</template>

<style scoped>
.profile {
    width: 100%;
}

span {
    display: block;
    text-align: center;
    font-family: "Tapestry";
    color: white;
    font-size: 40px;
}

span#title {
    font-size: 60px;
    margin-top: 50px;
}

.profile>img {
    display: block;
    border: 3px solid white;
    border-radius: 50px;
    margin: 0 auto;
}

.icons {
    position: absolute;
    right: 10px;
    top: 120px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
}

.icons img {
    width: 80px;
    transform: scale(1);
    transition: transform 0.2s;
    cursor: pointer;
}

.icons img:hover {
    width: 80px;
    transform: scale(1.1);
    transition: transform 0.2s;
}

.icons > img {
    margin-right: 20px;
}
</style>