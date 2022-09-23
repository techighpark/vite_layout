<template>

	<div>Page1</div>
	<!--  <router-link to="/page1/children1">link1</router-link>-->
	<!--  <router-link to="/page1/children2">link2</router-link>-->


</template>

<script setup>

import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const kakaoAuth = window.Kakao;

const kakaoHeader = {
	'Authorization': process.env.TECH_ALL_KAKAO_ADMIN_KEY,
	'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};
const getKaToken = async( code ) => {
	try {
		const data = {
			grant_type: 'authorization_code',
			client_id: process.env.TECH_ALL_KAKAO_RESTAPI_KEY,
			redirectUri: 'https://localhost:3000',
			code: code,
		};
		const queryString = Object.keys( data )
															.map( k => encodeURIComponent( k ) + '=' + encodeURIComponent( data[k] ) )
															.join( '&' );
		const result = await axios.post( 'http://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader } );
		console.log( result );
		getKakaoInfo( result.data.access_token );
		return result;
	} catch( err ) {
		console.log( err );
		return err;
	}
};
const getKakaoInfo = async( accessToken ) => {
	let data = '';
	kakaoAuth.setAccessToken( accessToken );
	await Kakao.API.request( {
		url: '/v2/user/me',
		sucess: function( res ){
			data = res;
		},
		fail: function( err ){
			console.log( err );
		},
	} );
	console.log( 'user info : ', data );
	return data;

};
getKaToken( route.query.code );

</script>
