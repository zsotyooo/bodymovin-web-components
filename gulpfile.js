const { task, series, parallel } = require('gulp');

const fractal = require('./tasks/fractal');
const stencil = require('./tasks/stencil');
const styles = require('./tasks/styles');
const scripts = require('./tasks/scripts');

// Load in all tasks.
const tasks = [
  fractal,
  stencil,
  styles,
  scripts
];

// Loop over the required tasks and bind them all to Gulp.
tasks.forEach(taskGroup => {
  Object.entries(taskGroup)
        .forEach(([,taskItem]) => task(taskItem));
});

const build = series(
  stencil.build,
  fractal.build,
);
build.displayName = 'build';
build.description = 'Compile all assets.';
task(build);

const lint = parallel(
  styles.lint,
  scripts.lint,
);
lint.displayName = 'lint';
lint.description = 'Lint all files.';
task(lint);


const watch = parallel(
  fractal.start,
  stencil.dev,
  styles.watch,
  scripts.watch,
);
watch.displayName = 'watch';
watch.description = 'Watch all assets for changes.';
task(watch);

// By default we just build and watch.
task('default', series(build, watch));
