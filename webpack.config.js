let path = require('path');

module.exports = { 
    // basic  webpack init
    entry: "./src/main.js" , 

    mode :'development', 

    output: {
        path: path.resolve(__dirname , "dist") , 
        filename: "bundle.js"
    }, 
    
    // adding babale loader 
   module: {
       rules: [{
           test: /\.js$/,
           exclude: /node_modules/ , 
           use: {
               loader: 'babel-loader',
               options: {
                   presets: ['@babel/preset-env']
               }
           }
       }]
   }


}