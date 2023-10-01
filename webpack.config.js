module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      indentedSyntax: false,
                      // sass-loader version >= 8
                      sassOptions: {
                        indentedSyntax: false
                      }
                    }
                  }
                ]
              }
        ]
    }
}