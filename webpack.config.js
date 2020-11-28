const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

settings = {
  mode: "development",
  entry: [ "./src/index.js" ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
};

module.exports = settings
