const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:  'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,//leer todos los archivos con extension css
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
}