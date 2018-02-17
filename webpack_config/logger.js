const chalk = require('chalk');

// this plugin if for logging url after each time the compilation is done.
module.exports = class LogPlugin {
  constructor(port) {
    this.port = port;
  }

  apply(compiler) {
    // TODO: add https support
    const protocol = 'http';
    compiler.plugin('done', () => {
      console.log(
        `> App is running at ${chalk.yellow(
          `${protocol}://localhost:${this.port}`
        )}\n`
      );
    });
  }
};
