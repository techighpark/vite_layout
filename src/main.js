import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/libs/router.js';
import axios from 'axios';

const app = createApp( App );
const components = import.meta.glob( './components/*.vue', { eager: true } );

Object.entries( components ).forEach( ( [ path, definition ] ) => {
	const componentName = path.split( '/' ).pop().replace( /\.\w+$/, '' );
	app.component( componentName, definition.default );
} );

app.use( router );
app.config.globalProperties.axios = axios;
app.mount( '#app' );