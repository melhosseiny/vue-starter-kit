import express from 'express';
import http from 'http';
import path from 'path';
import url from 'url';
import compression from 'compression';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8000;

let app = express();
let server = http.Server(app);

app.use(compression());
app.use(express.static('static'));
app.use(express.static('dist'));

if (process.env.NODE_ENV === 'development') {
  const webpack = await import('webpack');
  const webpackConfig = await import('./webpack.config.dev.js');
  const webpackDevMiddleware = await import('webpack-dev-middleware');
  const webpackHotMiddleware = await import('webpack-hot-middleware');

  const compiler = webpack.default(webpackConfig.default);

  app.use(webpackDevMiddleware.default(compiler, {
    publicPath: webpackConfig.default.output.publicPath
  }));
  app.use(webpackHotMiddleware.default(compiler));
}

server.listen(PORT);
