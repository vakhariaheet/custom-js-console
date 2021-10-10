import * as path from 'path';

export default {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		library: 'customConsole',

		libraryTarget: 'window',
		libraryExport: 'default',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
};
