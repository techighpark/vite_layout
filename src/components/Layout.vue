<template>
  <div>
    <Header/>
    <slot :text="slotPros"></slot>
    <Footer/>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const slotPros = ref( 'slot data' );

</script>
