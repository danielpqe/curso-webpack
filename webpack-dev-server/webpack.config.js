const path = require('path');

module.exports={
    mode: 'development',
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:  'bundle.js'
    },
    devServer: {
        port:9000
    },
    module: {
        rules: [
            {
                test: /\.css$/,//leer todos los archivos con extension css
                use: [
                    'style-loader',
                    'css-loader'//cargar archivos css e interprestarlos
                ]
            }
        ]
    }
}