const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    another: './src/another.js'
  },
  // devtool: 'inline-source-map', // 错误追踪
  target: "web",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  stats: {
    modules: true,
  },
  optimization: {
    moduleIds: "hashed",
    chunkIds: "named",
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 5,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '4demo'
    })
  ]
};