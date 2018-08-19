const http = require('http')

const getText = require('./fileRead')
const { file, env } = require('./paramsRead')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  const path = req.url

  if (path === '/') return res.end('hello world')

  if (path === '/text') return res.end(getText(file))

  if (path === '/text2') return res.end(getText("./info2/info.txt"))

  if (path === '/env') return res.end(env)

  return res.end('not corect request')

})

server.on('clientError', (err, socket) => {
  console.warn('err client: ', err)
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

module.exports = server