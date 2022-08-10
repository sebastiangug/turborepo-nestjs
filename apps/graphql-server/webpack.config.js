const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["./src/main.ts"],
  target: "node",
  externals: [
    nodeExternals({
      allowlist: [/@myapp\/.*/],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
};
