<script setup>
import { computed, onMounted, ref, watch } from 'vue';

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
// console.group( 'before' );
// // plusCount.value = plusCount.get
// console.log( 'before count : ', count.value );
// console.log( 'before computed: ', plusCount.value );
// console.groupEnd();
// plusCount.value = * : plusCount.set
plusCount.value = 500;
// console.group( 'after' );
// console.log( 'after count : ', count.value );
// console.log( 'after computed: ', plusCount.value );
// console.groupEnd();

watch( count, ( newVal, oldVal ) => {
	// console.group( 'watch' );
	// console.log( 'new', newVal );
	// console.log( 'old', oldVal );
	// console.log( count.value );
	// console.groupEnd( 'watch end' );
} );

// console.group( import.meta.env.MODE );
// console.group( 'import.meta.env' );
// console.log( import.meta.env );
// console.groupEnd();
// console.group( 'process.env' );
// console.log( process.env );
// console.groupEnd();
// console.groupEnd();
onMounted( () => {
	if( window.kakao && window.kakao.maps ) {
		initMap();
	} else {
		const script = document.createElement( 'script' );
		/* global kakao */
		script.onload = () => kakao.maps.load( initMap );
		script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${ process.env.TECH_ALL_KAKAO_MAP_JS_KEY }`;
		document.head.appendChild( script );
	}
} );
const initMap = () => {
	const container = document.getElementById( 'map' );
	const options = { //지도를 생성할 때 필요한 기본 옵션
		center: new kakao.maps.LatLng( 33.450701, 126.570667 ), //지도의 중심좌표.
		level: 3, //지도의 레벨(확대, 축소 정도)
	};
	let map = new kakao.maps.Map( container, options );
	const markerPos = new kakao.maps.LatLng( 33.450701, 126.570667 );
	const marker = new kakao.maps.Marker( { position: markerPos } );
	marker.setMap( map );
	marker.setDraggable( true );
};
const getWayTo = () => {
	// 현재 페이지에서 이동
	window.location.href = 'https://map.kakao.com/link/to/18577297';
	// 새창으로 열기
	window.open( 'https://map.kakao.com/link/to/18577297' );
	// 팝업 창 열기
	window.open( 'https://map.kakao.com/link/to/18577297', 'kakao mappp', 'width=800, height=700 toolbar=no, menubar=no, scrollbars=no, resizable=yes' );
};
</script>

<template>
	<layout>
		<div class="border border-red-400">
			<button @click="count++">button</button>
			<!--			<router-view/>-->
			<!--			<router-view name="rightBar"></router-view>-->
			<div id="map" class="border border-red-400" style="width:500px;height:400px;"></div>
			<button @click="getWayTo">Find Way</button>
		</div>
		{{ re }}
	</layout>
</template>

