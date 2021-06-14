import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import dotenv from 'dotenv';

export const favicon = path.resolve(
  __dirname,
  '../src/assets/party-popper.png',
);

dotenv.config;

const { CALENDAR_ID, CLIENT_ID, CLIENT_SECRET, EVENT_ID, REFRESH_TOKEN } =
  process.env;

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
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new webpack.DefinePlugin({
      envs: JSON.stringify({
        CALENDAR_ID,
        CLIENT_ID,
        CLIENT_SECRET,
        EVENT_ID,
        REFRESH_TOKEN,
      }),
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({ extractComments: true }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

export default config;
