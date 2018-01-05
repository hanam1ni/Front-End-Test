const path = require('path');

module.exports = {
  module: {
    rules: [
        {
            test:/\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
          },
          { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000",
            include: path.resolve(__dirname, '../')
          },
          { 
            test: /\.(jpg|otf)$/, 
            loader: "file-loader",
            include: path.resolve(__dirname, '../')
          },
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            include: path.resolve(__dirname, '../')
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
            include: path.resolve(__dirname, '../')
          },
          {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file-loader',
            include: path.resolve(__dirname, '../')
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
            include: path.resolve(__dirname, '../')
          }
    ]
  }
}