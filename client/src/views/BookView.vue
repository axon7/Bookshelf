<template>
  <p>Strona książki</p>
</template>

<script>
import axios from "axios";

export default {
  name: "BookView",
  data() {
    return {
      book: {},
    };
  },
  mounted() {
    this.fetchBook();
    // console.log(this.$route.params.id);
  },
  methods: {
    fetchBook() {
      console.log("searching");
      const bookId = this.$route.params.id;
      console.log(bookId);

      let data = axios
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((response) => {
          console.log(response.data);
          this.book = response.data.volumeInfo;
          this.loadState = "success";
        });
      this.items = data.data;
    },
  },
};
</script>

<style></style>
