<template>
  <form @submit.prevent="search">
    <input v-model="searchTerm" type="text" placeholder="Search books" />
    <input type="submit" value="Search" class="button" />
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Search",
  props: {
    method: { type: Function },
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      console.log(this.searchTerm);
      this.method(this.searchTerm);
    },
  },
};
</script>
