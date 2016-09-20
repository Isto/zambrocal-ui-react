module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'Zambrocal.js',
		libraryTarget: 'umd',
		library: 'zambrocal-ui-react',
		umdNamedDefine: true
	}
}