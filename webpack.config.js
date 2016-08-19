// This file: /webpack.config.js (in root)

var webpack = require('webpack');

module.exports = {
//  entry : './public/app.js',
// script! invokes "script loader", for webpack purposes
  entry : [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
 ], // need babel-loader!
 // lets Foundation attach to the jQuery object ...
 externals : {
   jquery : 'jQuery'
 },
 // Tell webpack to watch for var names (on left)
 // and to automatically swap in (provide) the plugin (on right)
 // Essentially, this obviates need to require jQuery everywhere...
 plugins: [
   new webpack.ProvidePlugin({
     '$': 'jquery',
     'jQuery' : 'jquery'
   })
 ],
  output : {
    path : __dirname, // current directory (root)
    filename : './public/bundle.js'
  },
  resolve : {
    root : __dirname,
    alias : {
      Main : 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      applicationStyles: 'app/styles/app.scss',
    },
    extensions : ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        // run through react, then through es2015 ..
        query : {
          presets : ['react', 'es2015', 'stage-0']
        },
        test : /\.jsx?$/, // regex! ends in '.jsx'
        exclude : /(node_modules|bower_components)/
      }
    ]
  },
  devtool : 'cheap-module-eval-source-map'
};
