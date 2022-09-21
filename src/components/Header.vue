<template>
  <header class="py-10 border-b">
    <container>
      <router-link to="/">Home</router-link>
      <router-link to="/page1">Page1</router-link>
      <div @click="propsRoute">Home Props</div>
    </container>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const propsRoute = () => {
  router.push( { name: 'page', state: { abc: 'abcadfasfsaf' } } );

};
</script>

<style scoped>

</style>