const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.BannerPlugin({banner: '#!/usr/bin/env node', raw: true}),
    new WebpackDeepScopeAnalysisPlugin(),
    new CopyPlugin([
      { from: './templates', to: 'templates/' },
    ]),
  ],
  optimization: {
    minimizer: [new TerserPlugin(
      {
        parallel: 5,
        sourceMap: true,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: {
            comments: false,
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }
    )
    ],
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
