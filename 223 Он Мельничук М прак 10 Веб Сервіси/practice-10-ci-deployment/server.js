const http = require('http');
const { getConfig } = require('./src/config');
const { sendJson, setSecurityHeaders } = require('./src/response');

const config = getConfig();

const server = http.createServer((req, res) => {
  setSecurityHeaders(res);

  if (req.method === 'GET' && req.url === '/') {
    return sendJson(res, 200, {
      message: 'Practice 10 CI + Deployment server is running',
      environment: config.nodeEnv
    });
  }

  if (req.method === 'GET' && req.url === '/health') {
    return sendJson(res, 200, {
      status: 'ok',
      uptime: process.uptime()
    });
  }

  sendJson(res, 404, {
    error: 'Route not found'
  });
});

server.headersTimeout = config.headersTimeout;
server.requestTimeout = config.requestTimeout;

server.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
  console.log(`Environment: ${config.nodeEnv}`);
});
