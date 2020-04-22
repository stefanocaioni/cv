const nodeExternals = require('webpack-node-externals')

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
    externals: [nodeExternals()]
  }
]
