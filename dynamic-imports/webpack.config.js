const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    // mode: 'development',
    entry: {
        // vendor: ['react','react-dom'],
        home: path.resolve(__dirname,'./src/js/index.js'),
        contact: path.resolve(__dirname,'./src/js/contact.js')
    },

    output: {
        path: path.resolve(__dirname,'dist'),
        filename:  '[name].js',
        publicPath: path.resolve(__dirname,'dist')+"/",
        // chunkFilename: "js/[id].js"
    },
    module: {
        rules: [
            {
                test: /\.json$/
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
                exclude: /(node_modules)/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:['@babel/env','@babel/react'],
                        plugins: ["syntax-dynamic-import"]
                    }
                }
            },
            {
                test: /\.css$/,//leer todos los archivos con extension css
                use:[MiniCssExtractPlugin.loader, "css-loader"]
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
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].css"
        // })
    ]
    // ,
    // optimization: {
    //     splitChunks: {
    //         cacheGroups:{
    //             vendor:{
    //                 chunks: 'initial',
    //                 name: 'vendor',
    //                 test: 'vendor',
    //                 enforce: true
    //             }
    //         }
    //     }
    // }
}
