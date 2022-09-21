<script setup>
import Children1 from '@/views/Children1.vue';
import { h } from 'vue';

const p = h( 'div', {
  id: 'foo',
  innerHTML: 'hello',
  '.name': 'some-name',
  style: { color: 'red' },
  onClick: () => {
    console.log( 'click' );
  },
} );

function render() {
  return h( 'div', [ p ] );
}

render();
</script>

<template>
  <layout>
    <div class="border border-red-400">
      <router-view/>
      <router-view name="rightBar"></router-view>
    </div>
    <children1/>
  </layout>
</template>

