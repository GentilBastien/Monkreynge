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
        <span id="title">ValoXx38__</span>
        <img src="@/components/icons/pp.png" alt="pp">
        <span>Cringe lord (Seigneur du malaise)</span>
        <span>Rank #45 <div id="up"></div></span>
        <div class="sub">
            <span class="subtext">Vidéos notées : 12</span>
            <span class="subtext">Note moyenne du contenu : 9.5/10</span>
        </div>
    </div>
</template>

<style scoped>
#up {
    display: inline-block;
    height: 0;
    width: 0;
    border-right: 20px solid transparent;
    border-bottom: 35px solid var(--main-col);
    border-left: 20px solid transparent;
}
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

.sub {
    margin: 60px 0;
}
.subtext {
    color: rgb(196, 196, 196);
    font-size: 32px;
}

.profile>img {
    display: block;
    border: 3px solid white;
    border-radius: 50px;
    margin: 0 auto 20px auto;
}

.icons {
    position: absolute;
    right: 10px;
    bottom: 20px;
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