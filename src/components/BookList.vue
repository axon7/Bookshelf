<template>
  <div v-if="books.length > 0">
    <div v-for="book in books" :key="book.id">
      {{ book.volumeInfo.title }}
    </div>
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
