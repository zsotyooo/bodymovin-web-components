const gulp = require('gulp');
const tslint = require('gulp-tslint');
const config = require('./config').scripts;

// Lint scripts.
const lint = () => {
  return gulp.src(config.src)
    .pipe(tslint({
      formatter: 'stylish'
    }))
    .pipe(tslint.report({
      allowWarnings: true,
      // Only throw errors if we're building for production.
      emitError: process.env.NODE_ENV === 'production'
    }));
};

lint.displayName = 'scripts:lint';
lint.description = 'Lint JavaScript'

const watch = () => gulp.watch([config.src], lint);

watch.displayName = 'scripts:watch';
watch.description = 'Watch JavaScript files for changes.'

module.exports = {
  lint,
  watch,
}
