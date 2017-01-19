var webpack = require('webpack');


module.exports = {
  entry: "./index.js",
  output:  {
    path: "dist/assets",
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module:  {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:  {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      warnings: false,
      mangle: true
    })
  ]
}
