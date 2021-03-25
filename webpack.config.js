const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  // eval 是字符串形式的souce-map，可以缓存
  // cheap 不包含列的信息，而且不包含loader的source-map，不利于源码调试
  // module 包含loader的souce-map信息
  // inline 是内联的souce-map，不单独生成source-map信息
  // devtool: 'eval-cheap-module-source-map',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre', // 指定loader执行的顺序，前置loader
        options: { fix: true },
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // ['@babel/preset-env', {
                //   useBuiltIns: 'usage', // 按需加载polyfill，也不需要在入口文件处手动 import '@babel/polyfill'
                //   corejs: { version: 3 } // corejs 是一个给低版本的浏览器提供接口的库，如 Promise、Map和Set 等
                // }],
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-transform-modules-commonjs',
                ['@babel/plugin-transform-runtime', {
                  corejs: false,
                  helpers: true, // 移除内联babel helpers并替换使用babel-runtime/helpers 来替换
                  regenerator: true // 是否开启generator函数转换成使用regenerator runtime来避免污染全局域
                }]
              ]
            }
          }
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 10,
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
