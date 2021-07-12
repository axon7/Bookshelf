<template>
  <div class="books-container" v-if="books.length > 0">
    <router-link
      class="book-card"
      :to="{ name: 'BookView', params: { id: book.id } }"
      v-for="book in books"
      :key="book.id"
    >
      <img :src="book.volumeInfo.imageLinks.thumbnail" />
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
<style scoped lang="scss">
.books-container {
  max-width: 700px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}

.book-card {
  display: flex;
  align-items: center;
  background-color: grey;
  margin-bottom: 20px;
  border-radius: 4px;
  min-height: 125px;
}
</style>
