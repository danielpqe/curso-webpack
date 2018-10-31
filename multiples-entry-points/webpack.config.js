const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry:{
        home:path.resolve(__dirname,'src/js/index.js'),
        precios:path.resolve(__dirname,'src/js/precios.js'),
        contacto:path.resolve(__dirname,'src/js/contacto.js')
    } ,
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:  'js/[name].js'
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