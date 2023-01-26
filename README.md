# Front End Toolkit

## Starter Template

This project is a set of best practices brought to you by the team at Devbridge, which will allow you to start project quickly, non depending from any javascript framework.
Features, that are already here:

- Webpack dev server with Hot Module Reload feature.
- Linting integration and configuration.
- Pre-commit hooks, to keep project "clean".
- Component based development approach, which will help to transfer code on whatever front-end framework you want or just use it as a plain HTML site generator.
- Prepared code hygiene tools, like editor config, nvmrc, npmrc files, and small things, like npm scripts.

## Installation

Switch to right node version using [nvm](https://github.com/creationix/nvm). (Which node version is required defined in [.nvmrc](https://github.com/devbridge/Front-End-Toolkit/blob/v2-dev/.nvmrc) file):

    $ nvm use [version number from .nvmrc file]

Inside project folder install dependencies from package.json:

    $ npm i

To start developing run npm script command:

    $ npm start

    $ npm run dev

    $ npm run build

    $ npm run stylelint:lint

    $ npm run stylelint:fix

    $ npm run prettier:check

    $ npm run prettier:fix

    $ npm run ts:lint

    $ npm run ts:fix

## License

The MIT License (MIT).
