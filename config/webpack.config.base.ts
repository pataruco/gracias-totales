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

const plugins: webpack.Configuration['plugins'] = [
  new HtmlWebpackPlugin({
    title: '¡Gracias totales!',
    filename: 'index.html',
    template: 'src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
  }),
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
];

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
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
  plugins,
};

export default config;
