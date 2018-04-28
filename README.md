# [MyCrypto Boilerplate](https://github.com/MyCryptoHQ/MyCrypto-Boilerplate)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

React + Typescript boilerplate

## Getting Started

1.  Download source files or `git clone`
2.  Install dependencies with `npm i`
3.  Develop locally with `npm start`
4.  Build with `npm run build`

### Commands

### `npm start`

Runs [webpack](https://github.com/webpack) in development mode and launches [webpack-dev-server](https://github.com/webpack/webpack-dev-server) on port 8080 – http://localhost:8080.

### `npm run build`

Runs [webpack](https://github.com/webpack) in production mode and outputs a build at `./dist`. Webpack optimizes the build for performance, these settings can be configured in `./webpack_config/webpack.prod.js`.

### `npm run precommit`

Used by [githooks](https://githooks.com/) to format commits with [prettier](https://github.com/prettier/prettier).

### `npm run prepush`

Used by [githooks](https://githooks.com/) to check for linting errors with [tslint](https://palantir.github.io/tslint/).

## What's Included?

* [React](https://reactjs.org/), [Redux](https://redux.js.org/), [ES7](https://babeljs.io/docs/plugins/#transform-plugins), and [Typescript](https://www.typescriptlang.org/index.html).
* A live development server with hot module reloading.
* A build script to bundle Typescript, JS, CSS, and other assets for production.

## License

MyCrypto Boilerplate is [MIT licensed](./LICENSE).
