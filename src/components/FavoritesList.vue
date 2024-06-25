<script setup>
import FavoriteItem from "./FavoriteItem.vue";
import { usePostStore } from "@/stores/PostStore";

const postStore = usePostStore();
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <FavoriteItem
      v-for="favorite in postStore.favorites"
      :key="favorite.id"
      :post="favorite"
    />
  </div>
  <div v-if="!postStore.favorites.length" class="text-center">
    Нет избранных постов!
  </div>
</template>
