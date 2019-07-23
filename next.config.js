const path = require("path");
const webpack = require("webpack");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withSass(
  withCss({
    // target: 'serverless',
    webpack: config => {
      // Font face support
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]"
          }
        }
      });

      return config;
    }
  })
);
