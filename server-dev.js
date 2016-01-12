var webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config');

var port = process.env.PORT || 8100;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  contentBase: './dist',
  stats: { colors: true }
}).listen(port, '0.0.0.0', function(err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at 0.0.0.0:' + port);
  });
