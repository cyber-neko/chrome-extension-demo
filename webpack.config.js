const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    content: "./src/scripts/content.ts",
    background: "./src/scripts/background.ts",
  },
  output: {
    path: path.resolve("public"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/popup.html", to: "popup.html" },
      ],
    }),
  ],
};
