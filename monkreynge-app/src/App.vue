<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">
          <div id="home">
            <span>M </span>
            <img id="monk" src="@/components/icons/monk.png" alt="contenu">
            <span>NKrEYnge</span>
          </div>
        </RouterLink>
        <RouterLink to="/contenu">
          <div>
            <img src="@/components/icons/contenu.png" alt="contenu">
            <span>Contenu</span>
          </div>
        </RouterLink>
        <RouterLink to="/conversations">
          <div>
            <img src="@/components/icons/mail.png" alt="contenu">
            <span>Conversations</span>
          </div>
        </RouterLink>
        <RouterLink to="/profil">
          <div>
            <img src="@/components/icons/user.png" alt="contenu">
            <span>Profil</span>
          </div>
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
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
  padding: 5px;
  margin: 10px;
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

nav a.router-link-exact-active {

}

nav a.router-link-exact-active:hover {

}
</style>
