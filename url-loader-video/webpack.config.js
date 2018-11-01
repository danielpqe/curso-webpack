const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry: path.resolve(__dirname,'./src/js/index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:  'bundle.js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.(mp4|webm)$/,
                use:{
                    loader: "url-loader",
                    options:{
                        limit:100000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use:{
                    loader: "url-loader",
                    options:{
                        limit:1000000
                    }
                }
            },
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
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
