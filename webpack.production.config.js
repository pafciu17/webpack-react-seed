var webpack = require('webpack'),
  assign = require('object-assign'),
  config = require('./webpack.config');

module.exports = assign(config, {
  devtool: false,
  devServer: false,
  debug: false,

  entry: {
    main: ['./src/main.js']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
});
