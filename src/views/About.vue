<template>
  <div class="about">
    <h1>This is an about page 123</h1>

    <router-link :to="{ name: 'About.Show', params: { id: 123 }, props: { default: { default: false, sidebar: true } } }">Show link</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  }
}
</script>
