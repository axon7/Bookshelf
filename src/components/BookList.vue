<template>
  <div class="books-container" v-if="books.length > 0">
    <router-link
      class="book-card"
      :to="{ name: 'BookView', params: { id: book.id } }"
      v-for="book in books"
      :key="book.id"
    >
      <img :src="book.volumeInfo.imageLinks.thumbnail" />
      <div class="book-info">
        <p class="title">{{ book.volumeInfo.title }}</p>
        <p class="description">{{ book.volumeInfo.description }}</p>
      </div>
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
  align-items: flex-start;
  min-height: 125px;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid rgb(228, 229, 233);
  border-radius: 4px;
  text-decoration: none;
  color: black;
}

.book-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
}

.title {
  text-align: left;
}

.description {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
