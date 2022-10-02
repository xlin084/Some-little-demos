<template>
  <div>
    <div :style="declareBgColor" class="bg">test</div>

    <input v-model="bgColor" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "blue",
    };
  },
  computed: {
    declareBgColor() {
      return `--bgColor: ${this.bgColor};`;
    },
  },
};
</script>

<style>
.bg {
  /* css variable */

  background-color: var(--bgColor);
}
.bg2 {
}
</style>
