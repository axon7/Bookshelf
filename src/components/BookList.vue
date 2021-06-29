<template>
  <div v-if="books.length > 0">
    <router-link
      :to="{ name: 'BookView', params: { id: book.id } }"
      v-for="book in books"
      :key="book.id"
    >
      {{ book.volumeInfo.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BookList",
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
