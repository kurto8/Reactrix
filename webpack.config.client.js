const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //removes any obsolete build artifacts resulting from including the hash.
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  name: 'client',
  entry: ['react-hot-loader/patch', path.resolve(__dirname, 'src/index.tsx')],
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/static'),
    filename: '[name].js',
    publicPath: '',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.client.json',
        },
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   proxy: {
  //     '/': 'http://localhost:3000',
  //   },
  //   static: {
  //     directory: './dist',
  //   },
  // },
  // devtool: 'source-map',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     templateContent: ({ htmlWebpackPlugin }) =>
  //       '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
  //       htmlWebpackPlugin.options.title +
  //       '</title></head><body><div id="app"></div></body></html>',
  //     filename: 'index.html',
  //   }),
  // ],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};

module.exports = config;
