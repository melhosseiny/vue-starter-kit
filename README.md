# vue-starter-kit

Starter kit for Vue 2 projects.

## Build

1. `npm i` to install dependencies
2. `npm run start:dev` to start dev server with HMR at `localhost:8000`

You can also use `npm start` to start dev server without HMR

- `npm run build:dev` (or `npm run watch`) to build for development
- `npm run build` to build for production


## Test/Lint

- `npm run test` to run Jest
- `npm run eslint` to run ESLint
- `npm run stylelint` to run stylelint

## App Structure

```
src/
    assets/          --> Global assets like theme.css
    components/      --> Vue single file components
    router/          --> App routes
    store/           --> Vuex store files
  main.js            --> Main app entry
  App.vue            --> Root component
coverage/            --> Istanbul coverage report
dist/                --> Webpack build output
static/              --> Static files like index.html
  index.html         --> Root markup template
.editorconfig        --> EditorConfig settings
.eslintrc.js         --> ESLint config
server.mjs           --> Express dev server
babel.config.js      --> Babel config
jest.config.js       --> Jest config
postcss.config.js    --> PostCSS config
stylelint.config.js  --> stylelint config
webpack.config.*     --> Webpack config
```

## `browserslist` config

```
{
  "development": [
    "last 1 version",
    "> 1%",
    "not ie 11",
    "not dead"
  ],
  "production": [
    "last 1 version",
    "> 1%",
    "not ie 11",
    "not dead"
  ],
  "test": [
    "node 14"
  ]
}
```

## Babel config

- [preset-env](https://babeljs.io/docs/en/babel-preset-env) to automatically manage syntax transforms
- [plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) to transform `() => import()` syntax

## Jest config

- Turn off `experimentalCSSCompile`
- Transform `.js` with `babel-jest` and `.vue` with `vue-jest`

## PostCSS config

- [CSS Modules](https://github.com/css-modules/css-modules) to locally scope style rules
- [autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor prefixes
- [postcss-preset-env](https://preset-env.cssdb.org/) to use modern CSS features such as custom props, custom media queries and nesting rules
- [cssnano](https://cssnano.co/) to compress CSS

## Webpack config

### Common

- Alias `src` by `@`
- [vue-loader](https://vue-loader.vuejs.org/) to load single-file components
- [babel-loader](https://github.com/babel/babel-loader) to transpile JavaScript files using babel
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) to clean build folder

### Dev

- `mode` set to `development`
- Inline source maps
- `postcss-loader` to process CSS with PostCSS
- Enable HMR using `HotModuleReplacementPlugin`

### Prod

- `mode` set to `production`
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to avoid flash of unstyled content

Dev/prod configs are merged with the common config using [webpack-merge](https://github.com/survivejs/webpack-merge).

## ESLint config

- Use `eslint:recommended`, `plugin:vue/recommended` and `plugin:jest/recommended`

## stylelint config

- Use `stylelint-config-standard`
- Ignore `:global` pseudo class
