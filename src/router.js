import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import FavoritesView from "./pages/FavoritesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/favorites", component: FavoritesView },
];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
