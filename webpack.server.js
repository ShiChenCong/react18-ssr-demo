const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build", "server"),
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
            },
          },
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   isRenderOnBrowser: "false",
    // }),
    // new webpack.DefinePlugin({
    //   isRenderOnBrowser: "false",
    // }),
  ],
};
