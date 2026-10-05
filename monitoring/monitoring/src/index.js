const http = require('http')
const client = require('prom-client')

const PORT = process.env.PORT || 3000
const register = new client.Registry()
client.collectDefaultMetrics({ register })

const httpRequests = new client.Counter({
  name: 'http_requests_total',
  help: 'Number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
  registers: [register]
})

const routes = {
  '/': () => [200, 'text/plain; charset=utf-8', 'Monitored app'],
  '/health': () => [200, 'application/json', JSON.stringify({ status: 'ok' })]
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/metrics') {
    res.writeHead(200, { 'Content-Type': register.contentType })
    return res.end(await register.metrics())
  }
  const handler = routes[req.url]
  const [status, type, body] = handler ? handler() : [404, 'text/plain', 'Not found']
  httpRequests.inc({ method: req.method, route: handler ? req.url : 'unknown', status })
  res.writeHead(status, { 'Content-Type': type })
  res.end(body)
})

if (require.main === module) {
  server.listen(PORT, () => console.log(`App on port ${PORT}, metrics at /metrics`))
}

module.exports = { server, register }
