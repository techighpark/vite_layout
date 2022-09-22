import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default ( { mode } ) => {
	// process.env = { ...process.env, ...loadEnv( mode, process.cwd() ) };

	return defineConfig( {
		plugins: [ vue() ],
		define: {
			'process.env': loadEnv( mode, process.cwd(), 'TECH' ),
			'process.env.development': loadEnv( mode, process.cwd() + 'development', 'TECH' ),
			'process.env.production': loadEnv( mode, process.cwd(), 'TECH' ),

		},
		resolve: {
			alias: {
				'@': path.resolve( __dirname, './src' ),
			},
		},
	} );
}
