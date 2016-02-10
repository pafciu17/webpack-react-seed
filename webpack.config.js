var webpack = require('webpack'),
  path = require('path');

module.exports = {
  devtool: "#inline-source-map",
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.html']
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8100',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    path: path.resolve('./dist/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'react-hot',
        exclude: /node_modules/
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        ecmaFeatures: { modules: true }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  eslint: {
    configFile: './.eslintrc'
  }
};