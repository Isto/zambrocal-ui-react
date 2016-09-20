var paths = require('./config/paths')

module.exports = {
	entry: './src/index.js',
	output: {
		path: './build',
		filename: 'Zambrocal.js',
		libraryTarget: 'umd',
		library: 'zambrocal-ui-react',
		umdNamedDefine: true
	},
	module: {
		loaders: [
			{	// Process JS with Babel
				test: /\.(js|jsx)$/,
				loader: 'babel',
				include: paths.appSrc,
				query: require('./config/babel')
			}
		]
	}
}