'use strict';

var path = require('path');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }

    return sources;
}

module.exports = {
  cache: true,
  entry: {
    main: getEntrySources(['./app/index.js'])
  },
  externals: {
    jQuery: 'jQuery',
    foundation: 'Foundation'
  },
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
};
