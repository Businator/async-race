import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { IConfiguration } from './webpack.config'
/* import path from 'path'
 */
const config: IConfiguration = {
  mode: 'development',
  bail: false,
  devtool: 'inline-source-map',
  devServer: {
    static: false,
    historyApiFallback: true,
    port: 1812,
    open: false,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Async Race',
      template: 'src/index.html',
      publicPath: '/',
      /*       favicon: path.resolve(__dirname, 'src', 'assets', 'images', 'favicon.png'),
       */
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
}

export default config
