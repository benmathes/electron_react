var webpack = require('webpack');

// force default ignoring of node_modules (3rd party libs)
var _MODULE_LOADERS = [
    {
        test: /\.js$/,
        loader: 'babel-loader',
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader', // SMELL: stringly-typed
    },
    {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader', // SMELL: stringly-typed
    },
]
for (var i=0; i < _MODULE_LOADERS.length; i++) {
    _MODULE_LOADERS[i].exclude =  /node_modules/
}


module.exports = {
    entry: {
        app: [
            'webpack/hot/dev-server',
            './javascript/entry.js'
        ],
    },

    output: {
        path: '.public/built',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built',
    },

    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: _MODULE_LOADERS
    },
};

    
