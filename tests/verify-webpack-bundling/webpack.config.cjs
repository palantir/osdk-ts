const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/entry.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: { type: "module" },
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    conditionNames: ["browser", "import", "require", "default"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, "tsconfig.json"),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.(svg|gif|png|jpg|woff2?|ttf|eot)$/,
        type: "asset/resource",
      },
    ],
  },
  externals: {
    "react": "module react",
    "react-dom": "module react-dom",
    "react-dom/client": "module react-dom/client",
    "react/jsx-runtime": "module react/jsx-runtime",
    "classnames": "module classnames",
  },
  performance: false,
};
