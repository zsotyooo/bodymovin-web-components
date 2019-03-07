const path = require('path');

console.log(path.join(__dirname, '..', 'src/components'));

module.exports = {
  fractal: {
    projectTitle: 'BodyMovin Web Components',
    src: path.join(__dirname, '..', 'src'),
    staticPath: path.join(__dirname, '..', 'www'),
    styleguidePath: path.join(__dirname, '..', 'docs'),
  },
  styles: {
    src: path.join(__dirname, '..', 'src/**/*.css'),
  },
  scripts: {
    src: path.join(__dirname, '..', 'src/**/*.{ts,tsx}'),
  }
}