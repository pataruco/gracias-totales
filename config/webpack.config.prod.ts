// @ts-ignore
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { favicon } from './webpack.config.dev';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../docs'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '¡Gracias totales!',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: './[name].css',
    }),
    new FaviconsWebpackPlugin(favicon),
  ],
  node: {
    net: 'empty',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({ extractComments: true }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

export default config;
