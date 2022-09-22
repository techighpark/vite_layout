<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useMeta } from 'vue-meta';

const re = new RegExp( 'ab+c' );
const regexTest = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
regexTest.test( '한글' );

const count = ref( 1 );
const plusCount = computed( {
	get: () => count.value + 10,
	set: ( val ) => {
		count.value = val - 100;
	},
} );
console.group( 'before' );
// plusCount.value = plusCount.get
console.log( 'before count : ', count.value );
console.log( 'before computed: ', plusCount.value );
console.groupEnd();
// plusCount.value = * : plusCount.set
plusCount.value = 500;
console.group( 'after' );
console.log( 'after count : ', count.value );
console.log( 'after computed: ', plusCount.value );
console.groupEnd();

watch( count, ( newVal, oldVal ) => {
	console.group( 'watch' );
	console.log( 'new', newVal );
	console.log( 'old', oldVal );
	console.log( count.value );
	console.groupEnd( 'watch end' );
} );
onMounted( () => {
	useMeta( {
		meta: [
			{ vmid: 'description', content: 'abs' },
		],
	} );
} );
</script>

<template>
	<layout>
		<div class="border border-red-400">
			<button @click="count++">button</button>
			<!--			<router-view/>-->
			<!--			<router-view name="rightBar"></router-view>-->
		</div>
		{{ re }}
	</layout>
</template>

