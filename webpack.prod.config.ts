import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { NetlifyPlugin } from 'netlify-webpack-plugin'
import { BannerPlugin, CleanPlugin } from 'webpack'

import packageJson from './package.json'
import { IConfiguration } from './webpack.config'
import path from 'path'

const config: IConfiguration = {
  mode: 'production',
  bail: true,
  plugins: [
    new BannerPlugin({
      banner: `${packageJson.name}@${packageJson.version} ${Date()}`,
    }),
    new CleanPlugin(),
    new HtmlWebpackPlugin({
      title: 'Async Race',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      publicPath: '/',
      /*       favicon: path.resolve(__dirname, 'src', 'assets', 'images', 'favicon.png'),
       */
    }),
    new MiniCssExtractPlugin({ filename: `${packageJson.name}.css` }),
    new NetlifyPlugin({
      redirects: [
        {
          from: '/*',
          to: '/index.html',
          status: 200,
        },
      ],
    }),
  ],
  devtool: false,
}

export default config
