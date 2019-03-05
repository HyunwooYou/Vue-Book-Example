var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/app.js',

    'ecmascript.app': './src/ecmascript/app.js',
    'home.app': './src/home/app.js',
    'multilingual.app': './src/multilingual/app.js',
    'updateCssWithJs.app': './src/updateCssWithJs/app.js',
    'hwBlog.app': './src/hwBlog/app.js',

    'vuex.app': './src/vuex/app.js',
    'vueJsGrid.app': './src/vueJsGrid/app.js',
    'vueRouter.app': './src/vueRouter/app.js',
    'contactapp.app': './src/contactapp/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist/'

    // filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        publicPath: './dist/',
        name: '[name].[ext]?[hash]'
      }
    }
  ]
},
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@components': path.resolve(__dirname, 'src/common/components'),
      '@js': path.resolve(__dirname, 'src/common/js'),
      style: path.resolve(__dirname, 'src/common/style'),
      assets: path.resolve(__dirname, 'src/common/assets'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port: 1215
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

  ])
}
