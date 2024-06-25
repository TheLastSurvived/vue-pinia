<script setup>
import { usePostStore } from "@/stores/PostStore";
import Card from "./TheCard.vue";
import { onMounted } from "vue";

const postStore = usePostStore();
onMounted(async () => {
  await postStore.getPosts();
});
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <Card v-for="post in postStore.posts" :key="post.id" :post="post" />
  </div>
</template>

<style></style>
