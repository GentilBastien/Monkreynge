import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ContentView from "../views/ContentView.vue";
import ConversationsView from "../views/ConversationsView.vue";
import MainView from "../views/MainView.vue";
import ProfilView from "../views/ProfilView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
  },
  {
    path: "/contenu",
    name: "contenu",
    component: ContentView,
  },
  {
    path: "/conversations",
    name: "conversations",
    component: ConversationsView,
  },
  {
    path: "/profil",
    name: "profil",
    component: ProfilView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
