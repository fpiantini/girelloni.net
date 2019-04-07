# Girelloni.net - A site to collect and enjoy trekking experiences

This repository contains the source code of the [girelloni.net](https://www.girelloni.net) website.

This source code can be used to setup a website useful to display information about trekking experiences, from displaying tracks over maps, to textual information to photos. For an example, see the [girelloni.net](https://www.girelloni.net) website.

The development is currently at a very early stage, and proceeds very slowly during the few spare time, so be patient...

## Development model

The development is done mainly in javascript, using some nodejs tools to assist in the process.

To setup the environment clone the repository, then initialize the project with the command:

```
yarn install
```

This will download all the necessary packages in the `node_modules` directory.

The following tools are used for the development:

 - [yarn](https://yarnpkg.com/en/), fast and reliable nodejs packages dependency manager
 - [webpack](https://webpack.js.org/), webpack dev server and other webpack utilities
 - [babel](https://babeljs.io/) javascript compiler and polyfill library

To test the site enter the following command:

```
npm run start
```

This should open a browser on the `http://localhost:8080` and the application should appear.
