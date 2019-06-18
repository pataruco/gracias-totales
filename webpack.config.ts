import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};

export default config;
