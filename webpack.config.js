const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
	  rules: [
		    { 
		    	test: /\.js$/, 
		    	exclude: /node_modules/, 
		    	loader: "babel-loader" 
		    },
		    {
	            test: /\.scss$/,
	            use: [
		            {
		                loader: "style-loader"
		            }, 
		            {
		                loader: "css-loader"
		            }, 
		            {
		                loader: "sass-loader"
		        	}
		  		]
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ 
				from: './src/index.html', 
				to: path.resolve(__dirname, 'dist') 
			},
			{
				from: './src/log', 
				to: path.resolve(__dirname, 'dist/log') 
			},
			{
				from: './src/images', 
				to: path.resolve(__dirname, 'dist/images') 
			}
		])
	]
};


