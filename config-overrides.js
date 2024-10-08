/* config-overrides.js */
const webpack = require("webpack");
const { override } = require("customize-cra");
module.exports = {
  webpack: override((config, env) => {

    config.resolve.fallback = {
      url: require.resolve("url"),
      assert: require.resolve("assert"),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      })
    );
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  })
};
