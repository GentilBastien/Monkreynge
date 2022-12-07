<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div>
            <nav>
                <a>
                    <div id="home">
                        <span>M </span>
                        <img id="monk" src="@/components/icons/monk.png" alt="contenu">
                        <span>NKrEYnge</span>
                    </div>
                </a>
                <a>
                    <div>
                        <img src="@/components/icons/user.png" alt="contenu">
                        <span>Se connecter</span>
                    </div>
                </a>
            </nav>
        </div>
    </header>

    <div id="main-bloc">
        <div id="titles">
            <span class="title">Connexion à</span>
            <span class="title">MONKrEYnge</span>
        </div>
        <img id="main-img" src="@/components/icons/monk.png" alt="contenu">
        <div>
            <input type="text" class="inputs" value="e-mail ou pseudonyme">
            <input type="text" class="inputs" value="Mot de passe">
            <RouterLink to="/main" class="inputs">Se connecter</RouterLink>
        </div>
        <div id="addons">
            <span>s'inscire</span>
            <span>mot de passe oublié</span>
        </div>
    </div>
</template>

<style scoped>
#main-bloc {
    background-color: black;
    width: 30%;
    margin: 0 auto;
    height: calc(100vh - 100px);
}

#titles {
    padding-top: 50px;
}

.title {
    display: block;
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin: 10px auto;
    width: fit-content;
}

#main-img {
    display: block;
    width: 200px;
    margin: 60px auto;
}

.inputs {
    margin: 10px auto;
    border: none;
    display: block;
    width: 400px;
    height: 60px;
    border-radius: 15px;
    font-size: 20px;
}

input[type="text"] {
    width: 345px;
    padding-left: 50px;
    font-style: italic;
}

a.inputs {
    background-color: white;
    color: var(--main-col);
    border: 2px solid var(--main-col);
    text-align: center;
    line-height: 60px;
    text-decoration: none;
}

input[type="text"]:hover, a.inputs:hover {
    transition: transform .2s;
    transform: scale(1.02);
}

a.inputs:hover {
    background-color: var(--main-col);
    color: white;
}

#addons span {
    margin-top: 60px;
    font-size: 24px;
}

#addons span:nth-child(1) {
    float: left;
    margin-left: 90px;
    color: var(--main-col);
    text-decoration: underline;
}

#addons span:nth-child(2) {
    float: right;
    margin-right: 90px;
    color: white;
}

header {
    background-color: var(--main-col);
    height: 100px;
    overflow: hidden;
}

a div#home {
    display: inline-block;
}

a div#home img {
    height: 60px;
}

a div#home span {
    color: white;
    font-style: italic;
    font-size: 80px;
    font-family: "Tapestry";
}

a div:not(#home) {
    float: right;
    width: 100px;
    padding: 22px;
}

a div:not(#home) img {
    width: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

a div:not(#home) span {
    display: block;
    text-align: center;
    color: white;
}

nav a.router-link-exact-active div:not(#home) {
    background-color: var(--opac50);
}

nav a div:not(#home):not(.router-link-exact-active):hover {
    background-color: var(--opac25);
}
</style>