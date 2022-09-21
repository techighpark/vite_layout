<template>
  <span>Children2</span>
  <component :is="isTrue ? 'Component' : 'span'">abc</component>
  <component :is="isTrue ? 'a' : 'span'">abc</component>
  <component :is="tag" v-model="username"/>
  <component :is="tag" ref="input"/>
  <div>{{ propsTitle }}</div>
  {{ plusCount }}
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';

console.log( history.state.abc );

const isTrue = ref( true );
const tag = ref( 'input' );
const username = ref( '' );
const propsTitle = ref( history.state.abc );
const count = ref( 1 );
const reactiveCount = reactive( { value: 1 } );
const plusCount = computed( {
  get: () => count.value + 1,
  set: ( val ) => {
    count.value = val - 1;
  },
} );
const plusReactiveCount = computed( {
  get: () => reactiveCount.value + 1,
  set: ( val ) => {
    reactiveCount.value = val - 1;
  },
} );
console.log( plusCount );
console.log( plusReactiveCount );

onMounted( () => {
  console.log( plusCount.value );

} );


</script>

<style scoped>

</style>