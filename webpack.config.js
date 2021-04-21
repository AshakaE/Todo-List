const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/i,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'sass-loader',
  //       ],
  //     },
  //     {
  //       test: /\.jpe?g$/i,
  //       use: [
  //         'url-loader',
  //       ],
  //     },
  //   ],
  // },
};

// "@babel/plugin-proposal-class-properties": "^7.13.0",