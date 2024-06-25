import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("postStore", () => {
  const posts = ref([]);
  const favorites = ref([]);

  const getPosts = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=12"
    );
    const data = await res.json();
    posts.value = data;
  };

  const addFavorite = async (id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const data = await res.json();

    if (favorites.value.filter((el) => el.id === data.id).length > 0) {
      return alert("Уже добавлен!");
    }

    favorites.value.push(data);
  };

  const removeFavorite = (id) => {
    favorites.value = favorites.value.filter((post) => post.id !== id);
  };

  return {
    posts,
    favorites,
    getPosts,
    addFavorite,
    removeFavorite,
  };
});
