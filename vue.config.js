// eslint-disable-next-line no-undef
const glob = require('glob')

const pages = glob.sync('./src/pages/**/main.js').reduce((obj, path) => {
  const chunk = path.split('./src/pages/')[1].split('/main.js')[0]
  obj[chunk] = {
    entry: path,
    template: 'public/index.html',
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
  return obj
}, {})


// eslint-disable-next-line no-undef
module.exports = {
  pages
}