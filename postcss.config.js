module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-sass-color-functions'),
    require('autoprefixer')
  ]
}