const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.js',
  cache: {
    type: 'filesystem',
    // cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  output: {
    publicPath: './client/',
    filename: 'index.js',
    path: path.resolve(__dirname, 'build', 'client'),
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  mode: 'development',
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
          MiniCssExtractPlugin.loader,
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
  ],
};
