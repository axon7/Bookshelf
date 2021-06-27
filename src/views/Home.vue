<template>
  <div class="home">
    <div v-for="item in items" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: [],
    };
  },
  async created() {
    let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.items = data.data;
  },
};
</script>
