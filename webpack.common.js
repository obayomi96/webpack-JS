const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
      // Above, use this file as out template to create html file in dist
  })
],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
        'style-loader', // Inject styles into DOM
        'css-loader', // Turns css into commomJS
        'sass-loader' // Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader'] // Html, images loader
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: {
          loader: 'file-loader', // Loads all kind of file and sends into dist folder
          options: {
            name: '[name].[hash].[ext]', // Creates a file in dist with a hash & ext
            outputPath: 'imgs',
            esModule: false // Added to inject correct file and not esModule
          }
        }
      }
    ]
  },
};
