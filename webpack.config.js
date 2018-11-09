const path = require('path')

const PUBLIC_DIR = path.resolve(__dirname, 'public')

module.exports = {
    entry: './src/main.js',
    devServer: {
      contentBase: PUBLIC_DIR,
      port: 8082,
      open: true,
      historyApiFallback: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}