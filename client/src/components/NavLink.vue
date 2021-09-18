<template>
  <a :href="url">
    <slot>{{ reversedText }}</slot>
  </a>
</template>

<script>
export default {
  props: {
    url: String,
  },
  data() {
    return {
      jakistext: "reversed",
    };
  },
  computed: {
    reversedText: function() {
      return this.jakistext
        .split("")
        .reverse()
        .join("");
    },
  },
};
</script>

<style></style>
