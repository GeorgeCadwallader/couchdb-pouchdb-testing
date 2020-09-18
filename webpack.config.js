const c = require('@practically/webpack-4-config');
const path = require('path');

c.initialize({
    entry_point: path.resolve(__dirname, 'src', 'index.js'),
});

/**
 * Define the main index template we want to use
 */
c.html(path.resolve(__dirname, 'public', 'index.html'));

/**
 * Build the config and name the chunks so that webpack dev server works
 */
const webpackConfig = c.build();
webpackConfig.optimization.splitChunks.name = 'a';

/**
 * Export the built config
 */
module.exports = webpackConfig;