// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
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
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        parallel: true,
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
    ],
  },
  plugins,
};

export default prodConfig;
