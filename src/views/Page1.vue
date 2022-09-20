<template>

  <div>Page1</div>
  <router-link to="/page1/children1">children1</router-link>
  <router-link to="/page1/children2">children2</router-link>
  <div>View</div>
  <router-view></router-view>
  <router-view name="RightBar"></router-view>

</template>

<script setup>

</script>

<style scoped>

</style>