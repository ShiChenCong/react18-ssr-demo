const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
// const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  entry: "./server/index.js",
  target: "node",
  output: {
    publicPath: './',
    filename: "bundle.js",
    path: path.resolve(__dirname, "build", "server"),
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  mode: "development",
  externals: [nodeExternals()],
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false,
              modules: true
            },
          },
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    // new LoadablePlugin({ filename: 'stats.json', writeToDisk: true })
    // new webpack.ProvidePlugin({
    //   isRenderOnBrowser: "false",
    // }),
    // new webpack.DefinePlugin({
    //   isRenderOnBrowser: "false",
    // }),
  ],
};
