const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/app.js',
    './src/scss/main.scss',
  ],
  output: {
    filename: './js/bundle.js',
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),
  ],
};
