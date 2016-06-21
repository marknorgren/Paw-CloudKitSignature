import webpack from 'webpack'
import path from 'path'

const name = 'CloudKitSignature'

const production = process.env.NODE_ENV === 'production'

const config = {
  target: 'node-webkit',
  entry: [
    'crypto',
    './src/CloudKitSignature.js'
  ],
  output:{
    path: path.join(__dirname,
      './build/com.markedsystems.PawExtensions.CloudKitSignature'),
    pathInfo: true,
    publicPath: '/build/',
    filename: name+'.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
      }
    ]
  }
}
module.exports = config
