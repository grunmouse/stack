import nodeResolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';

export default {
	input: './index.js',
	output: [{file: 'out.js', format:'esm', name:'Stack'}],
	plugins: [
		nodeResolve(),
		commonJs()
	]
};