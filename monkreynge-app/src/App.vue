<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Monkreynge</RouterLink>
        <RouterLink to="/contenu">Contenu</RouterLink>
        <RouterLink to="/conversations">Conversations</RouterLink>
        <RouterLink to="/profil">Profil</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
