const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
  entry: ['webpack-hot-middleware/client'],
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
              },
              importLoaders: 1
            }
          },
          { loader: 'postcss-loader', options: { postcssOptions: { config: path.join(__dirname, 'postcss.config.js') } } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
