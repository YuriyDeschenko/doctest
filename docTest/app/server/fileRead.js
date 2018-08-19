const fs = require('fs')

module.exports = (readFile) => {
  console.log('read file ', readFile)
  if (fs.existsSync(readFile)) return fs.readFileSync(readFile)
  else return `not correct path of file name: ${readFile}`
}