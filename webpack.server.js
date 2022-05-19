/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  cache: {
    type: 'filesystem',
    // cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  output: {
    publicPath: './',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build', 'server'),
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: 'initial',
  //         name: 'vendor',
  //         test: (module) => /node_modules/.test(module.resource),
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  mode: 'development',
  externals: [nodeExternals()],
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: false,
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name]-[contenthash:8].css',
      chunkFilename: 'static/css/[name]-[contenthash:8].chunk.css',
    }),
    new WebpackManifestPlugin({
      writeToFileEmit: true,
    }),
  ],
};
