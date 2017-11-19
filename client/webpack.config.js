const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src')
}

module.exports={
  entry: {
    default: path.join(paths.src, 'app.js'),
    ocado: path.join(paths.src + '/Company/Ocado/', 'app.js')
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  watch: true,
  devServer: {
    contentBase: paths.src,
    port: 3100
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        filename: 'commons.js',
        name: 'commons'
      })
  ]
};
