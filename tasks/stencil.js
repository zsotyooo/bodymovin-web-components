const { spawn } = require('child_process');

// Build web components.
const build = (done) => {
  spawn('npm', [ 'run', 'build:stencil', '--prod' ], { stdio: 'inherit' })
    .on('close', done);
};

// Dev web components.
const dev = () => {
  return spawn('npm', [ 'run', 'build:stencil', '--dev', '--watch', '--serve' ], { stdio: 'inherit' });
};

build.displayName = 'stencil:build';
build.description = 'Build web-components';

dev.displayName = 'stencil:dev';
dev.description = 'Starting stencil dev';

module.exports = {
  build,
  dev,
};