import path from 'path';
import webpack from 'webpack';

import config from './webpack.config.base';

const plugins = config.plugins?.concat(
  new webpack.HotModuleReplacementPlugin(),
);

const devConfig: webpack.Configuration = {
  ...config,
  devtool: 'inline-source-map',
  mode: 'development',
  plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    stats: 'errors-only',
  },
};

export default devConfig;
