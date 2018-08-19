const fileName = process.env.FILE_RES || 'response.txt'
const filePath = process.env.FILE_RES_PATH || './var/'
const env = process.env.GET_ENV_RESPONSE || 'not set env'

const file = filePath + fileName

module.exports = {
  env,
  file
}