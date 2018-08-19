const server = require('./server/app')

const port = process.env.CON_PORT || 8080

server.listen(port)

console.log('Server started')