const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: [/\.s[ac]ss/i, /\.css$/],
          use: [
            { loader: 'style-loader'},
            // css-loader 소스맵 옵션 활성화
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            // sass-loader 소스맵 옵션 활성화
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, // 빈칸 제거
          removeComments: true, // 주석 제거
        } : false,
      }),
      new CleanWebpackPlugin(),
    ],
  }
};