const HtmlWebpackPlugin = require("html-webpack-plugin");

const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const deps = require("./package.json").dependencies;
module.exports = 
  {
    entry: "./src/counter.js",
    mode:"development",

    output: {
      publicPath: "http://localhost:5002/"
    },

    resolve: {
      extensions: [".jsx", ".js", ".json"],
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin(),
      new WebpackManifestPlugin(),
    ],
  }
  
