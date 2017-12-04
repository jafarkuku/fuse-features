const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
};

/**
*Function that updates entry point object
*/
function updateEntryPoint() {
  const entry = {};
  const dirToRead = path.resolve(`${paths.src}/Company/`);
  const folders = fs.readdirSync(dirToRead);
  folders.shift();
  const looper = folders.map((el) => {
    const entryPoint = path.join(`${paths.src}/Company/${el.toLowerCase()}/`, 'app.jsx');
    entry[el] = entryPoint;
  });
  return entry;
}


module.exports = {
  entry: updateEntryPoint(),
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  watch: true,
  devServer: {
    contentBase: paths.src,
    port: 3100,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'commons.js',
      name: 'commons',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          quiet: true,
          caseSensitive: false,
          failOnError: false,
          failOnWarning: false,
          emitError: false,
          emitWarning: false,
        },
      },
    }),
  ],
};
