const path = require('path');

module.exports = {
  entry: [
    '.src/js/app.js',
  ],
  output: {
    filename: './js/bundle.js',
  },
  devtool: 'sourcemap',
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env',
        },
      },
    }],
  },
  plugins: [],
};
