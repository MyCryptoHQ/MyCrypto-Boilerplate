const chalk = require('chalk');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const logger = require('./logger');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

// Serve the files on port 3000.
app.listen(3000, function() {
  const port = this.address().port;
  console.log(
    `> App is running at ${chalk.yellow(`https://localhost:${port}`)}\n`
  );
});
