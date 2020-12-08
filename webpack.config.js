const path = require('path');

module.exports = {
   entry: './src/scripts/index.js',
   output: {
      path: path.resolve(__dirname, '.tmp/scripts'),
      filename: 'bundle.js',
   },
   mode: 'development',
   devtool: 'source-map',
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
      ],
   },
};
