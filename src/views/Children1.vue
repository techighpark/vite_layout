<template>
  <p>
    Ask
    <input v-model="question" class="bg-amber-400">
    <input v-model="answer" class="bg-amber-400">
  </p>
  <p>{{ answer }}</p>
  {{ computedQuestion }}
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const question = ref( '' );
const answer = ref( 'Answer' );
const computedQuestion = computed( () => {
  return question.value = '123';
} );
const getAnswer = async() => {
  answer.value = 'Thinking...';
  try {
    const res = await fetch( 'https://yesno.wtf/api' );
    answer.value = (await res.json());
  } catch( err ) {
    answer.value = 'Error!' + err;
  }
};
watch( question, ( question, prevQuestion ) => {
  if( question.includes( '?' ) ) {
    getAnswer();
  }
} );
watch( question, ( question ) => watchFn( question ) );
const watchFn = ( q ) => {
  console.log( q );
};

</script>

<style scoped>

</style>