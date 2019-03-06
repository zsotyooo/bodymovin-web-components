'use strict';

const gulp = require('gulp');

/*
* Require the path module
*/
const path = require('path');

const config = require('./config').fractal;

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

const logger = fractal.cli.console;
/*
 * Give your project a title.
 */
fractal.set('project.title', config.projectTitle);

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', config.src);

/*
 * Set default preview template
 */
fractal.components.set('default.preview', '@preview.default');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', config.src);
fractal.docs.set('markdown', true);

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', config.staticPath);

/**
 * Templating
 */
// Use Nunjucks as the template engine
fractal.components.engine('@frctl/nunjucks');
fractal.docs.engine('@frctl/nunjucks');
// Look for templates with a ".nunj" extension
fractal.components.set('ext', '.nunj');

/**
 * Server configuration
 */
fractal.web.set('server.port', 4000);
fractal.web.set('server.sync', true);
fractal.web.set('builder.dest', config.styleguidePath);
fractal.web.set('builder.urls.ext', '.html');

/**
 * Theming
 */
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "grey",
    nav: ["docs", "components"]
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

/**
 * Prevent Bluebird warnings like "a promise was created in a handler but was not returned from it"
 * caused by Nunjucks from polluting the console
 */
// const bluebird = require('bluebird');
// bluebird.config({
//   warnings: false
// });

// Start fractal dev server.
const start = () => {
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
}

// Build fractal files.
const build = () => {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
      logger.success('Fractal build completed!');
  });
}

start.displayName = 'fractal:start';
start.description = 'Start fractal web server.';

build.displayName = 'fractal:build';
build.description = 'Build fractal files.';

module.exports = {
  start,
  build,
}