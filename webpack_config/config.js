'use strict';
const path = require('path');

const paths = {
  root: path.join(__dirname, '../'),
  src: path.join(__dirname, '../src'),
  output: path.join(__dirname, '../dist'),
  assets: path.join(__dirname, '../src/assets'),
  static: path.join(__dirname, '../public'),
  modules: path.join(__dirname, '../node_modules')
};

module.exports = {
  // Configuration
  port: 3000,
  title: 'MyCrypto',
  path: paths,

  // Typescript rule config
  typescriptRule: {
    test: /\.(ts|tsx)$/,
    include: [paths.src],
    use: [
      {
        loader: 'ts-loader',
        options: { happyPackMode: true, logLevel: 'info' }
      }
    ],
    exclude: ['assets', 'sass']
      .map(dir => path.resolve(paths.src, dir))
      .concat([paths.modules])
  },

  // File resolution
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.json', '.scss'],
    modules: [paths.src, paths.modules, paths.root]
  }
};
