/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const emitPath = path.resolve(__dirname, 'build', 'client');
module.exports = {
  entry: './client/index.js',
  cache: {
    type: 'filesystem',
    // cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  output: {
    publicPath: './client/',
    filename: 'index.js',
    path: emitPath,
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
    new WebpackManifestPlugin({
      writeToFileEmit: true,
      generate: (seed, files) => {
        const entrypoints = new Set();
        const noChunkFiles = new Set();
        files.forEach((file) => {
          if (file.isChunk) {
            const groups = (
              (file.chunk || {})._groups || []
            ).forEach((group) => entrypoints.add(group));
          } else {
            noChunkFiles.add(file);
          }
        });
        const entries = [...entrypoints];
        const entryArrayManifest = entries.reduce((acc, entry) => {
          const name = (entry.options || {}).name
            || (entry.runtimeChunk || {}).name
            || entry.id;
          const allFiles = []
            .concat(
              ...(entry.chunks || []).map((chunk) => chunk.files.map((path) => !path.startsWith('/.') && emitPath + path)),
            )
            .filter(Boolean);

          const filesByType = allFiles.reduce((types, file) => {
            const fileType = file.slice(file.lastIndexOf('.') + 1);
            types[fileType] = types[fileType] || [];
            types[fileType].push(file);
            return types;
          }, {});

          const chunkIds = [].concat(
            ...(entry.chunks || []).map((chunk) => chunk.ids),
          );

          return name
            ? {
              ...acc,
              [name]: { ...filesByType, chunks: chunkIds },
            }
            : acc;
        }, seed);
        entryArrayManifest.noentry = [...noChunkFiles]
          .map((file) => !file.path.includes('/.') && file.path)
          .filter(Boolean)
          .reduce((types, file) => {
            const fileType = file.slice(file.lastIndexOf('.') + 1);
            types[fileType] = types[fileType] || [];
            types[fileType].push(file);
            return types;
          }, {});
        return entryArrayManifest;
      },
    }),
  ],
};
