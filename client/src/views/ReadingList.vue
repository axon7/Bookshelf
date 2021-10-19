<template>
  <div class="wrapper">
    <p>Reading List</p>
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from "@/components/BookList.vue";
import axios from "axios";
export default {
  components: { BookList },
  name: "ReadingList",
  data() {
    return {
      books: [],
    };
  },
  async created() {
    let res = await axios.get("/api/book/reading-list", {
      params: { userId: 1 },
    });

    this.books = res.data;
    console.log(res.data);
  },
};
</script>

<style scoped>
.wrapper {
  margin-right: 40px;
}
</style>
