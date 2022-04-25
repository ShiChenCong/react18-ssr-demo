const path = require('path')
module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build','client')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options :{
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}
