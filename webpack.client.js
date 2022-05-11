const path = require("path");
const webpack = require("webpack");
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  entry: "./client/index.js",
  output: {
    publicPath: './client/',
    filename: "index.js",
    path: path.resolve(__dirname, "build", "client"),
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  mode: "development",
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
        test: /\.css$/,
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
          "postcss-loader"
        ],
      },
    ],
  },
  plugins: [
    new LoadablePlugin({ filename: 'stats.json', writeToDisk: true })
    // new webpack.ProvidePlugin({
    //   isRenderOnBrowser: "true",
    // }),
    // new webpack.DefinePlugin({
    //   isRenderOnBrowser: "true",
    // }),
  ],
};
