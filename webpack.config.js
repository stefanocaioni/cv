const nodeExternals = require('webpack-node-externals');
const CreateFileWebpack = require('create-file-webpack');

const common = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
}

module.exports = [
  {
    ...common,
    entry: './src/client',
    output: {
      path: `${__dirname}/public`
    }
  },
  {
    ...common,
    target: 'node',
    entry: './src/server',
    externals: [nodeExternals()],
    plugins: [
      new CreateFileWebpack({
        path: './dist',
        fileName: '_redirects',
        content: '/* /index.html 200'
      })
    ]
  }
]
