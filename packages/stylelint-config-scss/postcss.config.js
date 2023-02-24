/* eslint-disable global-require */
/**
 * postcss
 *
 * @see https://postcss.org/
 */
module.exports = {
  plugins: [require('postcss-import'), require('postcss-preset-env'), require('autoprefixer')],
};
