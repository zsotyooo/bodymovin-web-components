const gulp = require("gulp");
const stylelint = require('gulp-stylelint');
const config = require('./config').styles;

// Lint stylesheets.
const lint = () => {
  return gulp
    .src(config.src)
    .pipe(
      stylelint({
        configBaseDir: process.cwd(),
        reporters: [
          {
            formatter: 'string',
            console: true,
          },
        ],
        failAfterError: process.env.NODE_ENV === 'production',
      })
    );
};

lint.displayName = "styles:lint";
lint.description = "Lint stylesheets";

const watch = () => gulp.watch([config.src], lint);

watch.displayName = 'styles:watch';
watch.description = 'Watch CSS files for changes.'

module.exports = {
  lint,
  watch,
}
