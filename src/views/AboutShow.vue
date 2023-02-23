<template>
  <div>
    <div>AboutShow.vue</div>

    {{ $route }}
  </div>
</template>

<script>
export default {
  name: "AboutShow",
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>
