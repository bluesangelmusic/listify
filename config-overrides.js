const { override, addWebpackModuleRule } = require('customize-cra')
module.exports = override(
  addWebpackModuleRule({
    test: /\.pug$/i,
    use: 'raw-loader',
  })
)
