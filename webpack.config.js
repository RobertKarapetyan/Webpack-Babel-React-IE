const path = require("path");
require("@babel/polyfill");
const PUBLIC_DIR = path.resolve(__dirname, "public");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  devServer: {
    static: PUBLIC_DIR,
    port: 8082,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: PUBLIC_DIR,
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            compact: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
