<script setup>
import { defineProps } from "vue";
defineProps({
  post: Object,
});

import { usePostStore } from "@/stores/PostStore";

const postStore = usePostStore();
</script>

<template>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ post.id }}.{{ post.title }}</h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        <button
          class="btn btn-danger"
          @click="postStore.removeFavorite(post.id)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>
