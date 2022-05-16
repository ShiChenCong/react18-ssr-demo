const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  output: {
    publicPath: './',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build', 'server'),
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
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
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
  ],
};
