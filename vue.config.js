const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  outputDir: 'build',
  css: {
    // Extract css in header
    extract: false,
  },
  configureWebpack: {
    // Splitting
    optimization: {
      splitChunks: false,
    },
  },
  // Get config: npx vue inspect > output.js
  // Doc: https://github.com/neutrinojs/webpack-chain
  chainWebpack: config => {
    // Widget vendors name
    config.output.filename('widget~vendors.js');
    // Widget filenames: [name], [chunkhash], [id]
    config.output.chunkFilename('widget~[name].js');
    // Terset: Remove all comments
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap(args => {
        // Doc: https://github.com/terser/terser
        args[0].terserOptions = {
          ...args[0].terserOptions,
          output: {
            comments: false,
          },
        };
        return args;
      });
    }
    // HTMLWebpackPlugin: Disable minifying
    config.plugin('html').tap(args => {
      args[0].minify = false;
      return args;
    });
    // HtmlBeautifyPlugin: HTML Beautify
    config.plugin('html-beautify').use(HtmlBeautifyPlugin, [
      {
        config: {
          html: {
            end_with_newline: false,
            indent_size: 2,
            indent_with_tabs: false,
            indent_inner_html: true,
            preserve_newlines: true,
            unformatted: ['p', 'i', 'b', 'span'],
          },
        },
        replace: [' type="text/javascript"'],
      },
    ]);
  },
};
