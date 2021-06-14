import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';

dotenv.config;

const { CALENDAR_ID, CLIENT_ID, CLIENT_SECRET, EVENT_ID, REFRESH_TOKEN } =
  process.env;

export const favicon = path.resolve(
  __dirname,
  '../src/assets/party-popper.png',
);

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
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
      chunkFilename: '[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin(favicon),
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
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    stats: 'errors-only',
  },
};

export default config;
