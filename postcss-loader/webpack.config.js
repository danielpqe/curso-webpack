const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    mode: 'development',
    entry: path.resolve(__dirname,'./src/js/index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:  'bundle.js'
    },
    module: {
        rules: [
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
                exclude: /(node_modules)/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:['@babel/env','@babel/react'],
                    }
                }
            },
            {
                test: /\.css$/,//leer todos los archivos con extension css
                use:[MiniCssExtractPlugin.loader,
                         {
                             loader:'css-loader',
                             options:{
                                 modules:true,
                                 importLoaders:1
                             }
                        },
                        'postcss-loader'
                    ]
            },
            {
                test: /\.scss$/,//leer todos los archivos con extension css
                use:[MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            },
            {
                test: /\.less/,//leer todos los archivos con extension css
                use:[MiniCssExtractPlugin.loader, "css-loader",{
                    loader: "less-loader",
                    options: {
                        noIeCompat:true
                    }
                }]
            },
            {
                test: /\.styl$/,
                use:[MiniCssExtractPlugin.loader,"css-loader",{
                    loader: "stylus-loader",
                    options: {
                        use:[
                            require('nib'),
                            require('rupture')
                        ],
                        import:[
                            '~nib/lib/nib/index.styl',
                            '~rupture/rupture/index.styl'
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
}
