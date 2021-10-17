<template>
  <div class="home">
    <Search :method="search" />
    <BookList :books="books" />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import BookList from "@/components/BookList.vue";
import axios from "axios";
export default {
  name: "Home",
  components: { Search, BookList },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    search(searchTerm) {
      console.log("searching");

      let data = axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&orderBy=newest&maxResults=10`
        )
        .then((response) => {
          console.log(response.data.items);
          this.books = response.data.items;
          this.loadState = "success";
        });
      this.items = data.data;
    },
  },
};
</script>
<style scoped>
.home {
  margin-right: 40px;
}
</style>
