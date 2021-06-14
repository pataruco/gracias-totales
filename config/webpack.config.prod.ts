import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

import config from './webpack.config.base';

const plugins = config.plugins?.concat(
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  }),
);

const prodConfig: webpack.Configuration = {
  ...config,
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({ extractComments: true }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../docs'),
  },
  plugins,
};

export default prodConfig;
