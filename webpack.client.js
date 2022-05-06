const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build", "client"),
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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader"
        ],
      },
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   isRenderOnBrowser: "true",
    // }),
    // new webpack.DefinePlugin({
    //   isRenderOnBrowser: "true",
    // }),
  ],
};
