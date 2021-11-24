import preprocess from 'svelte-preprocess';
import WindiCSS from 'rollup-plugin-windicss'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	plugins: [
		...WindiCSS(),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		ssr: true,
		target: '#svelte'
		
	}
};

export default config;
