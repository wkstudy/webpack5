const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    another: './src/another.js',
  },
  // devtool: 'inline-source-map', // 错误追踪
  target: ['es2015'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  cache: {
    type: 'filesystem',
    // cacheDirectory 默认路径是 node_modules/.cache/webpack
    cacheDirectory: path.resolve(__dirname, '.temp_cache')
  },
  stats: {
    ids: true,
    assets: false,
    // preset: "errors-only",
    modules: true,
    moduleAssets: false,
    depth: false,
    chunks: true,
    chunkModules: false, // 告知 stats 是否添加关于已构建模块和关于 chunk 的信息。
    // chunksSort: 'id', // 告知 stats 基于给定的字段给 chunks 排序。
  },
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify") 
    }
  },
  optimization: {
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    // splitChunks: {
    //   chunks: 'all',
    // },
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
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '5demo'
    })
  ]
};