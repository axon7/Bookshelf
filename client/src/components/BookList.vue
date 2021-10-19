<template>
  <div class="books-container" v-if="books.length > 0">
    <div class="card-wrapper" v-for="book in books" :key="book.id || book._id">
      <router-link
        class="book-card"
        :to="{ name: 'BookView', params: { id: book.id || book._id } }"
      >
        <img :src="book.volumeInfo.imageLinks?.thumbnail" />
        <div class="book-info">
          <p class="title">{{ book.volumeInfo.title }}</p>
          <div>
            <span
              class="author"
              v-for="author in book.volumeInfo.authors"
              :key="author"
            >
              {{ author }}
            </span>
          </div>
          <p class="description">{{ book.volumeInfo?.description }}</p>
        </div>
      </router-link>
      <div class="add-btn">
        <button @click="addBook(book)" alt="add to reading list">
          <font-awesome-icon icon="plus" />
        </button>
      </div>
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
  methods: {
    addBook(book) {
      console.log(book);
      const bookObj = {
        id: book.id,
        user: 1,
        addedToReadingList: true,
        isFinished: false,
        volumeInfo: book.volumeInfo,
      };
      this.$store.dispatch("addBook", bookObj);
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

.card-wrapper {
  position: relative;
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

.add-btn {
  margin-left: 20px;
  position: absolute;
  top: 0;
  right: -20px;
  color: rgb(111, 112, 119);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  z-index: 3;

  button {
    border-radius: 30px;
    padding: 0px;
    width: 40px;
    height: 40px;
    line-height: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: white;
    color: green;
    border: 1px solid rgb(241, 241, 244);
    cursor: pointer;
  }
}

.book-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 20px;
}

.title {
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
}

.description {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

.author {
  margin-right: 20px;

  font-size: 14px;
}
</style>
