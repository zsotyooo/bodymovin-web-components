const path = require('path');

console.log(path.join(__dirname, '..', 'src/components'));

module.exports = {
  fractal: {
    projectTitle: 'BodyMovin web components',
    src: path.join(__dirname, '..', 'src/components'),
    staticPath: path.join(__dirname, '..', 'dist'),
    styleguidePath: path.join(__dirname, '..', 'styleguide'),
  },
  styles: {
    src: path.join(__dirname, '..', 'src/**/*.css'),
  },
  scripts: {
    src: path.join(__dirname, '..', 'src/**/*.{ts,tsx}'),
  }
}