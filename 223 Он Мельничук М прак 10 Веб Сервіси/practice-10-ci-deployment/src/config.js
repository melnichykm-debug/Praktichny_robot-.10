function getConfig() {
  const port = Number(process.argv[2] || process.env.PORT || 3000);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error('PORT must be a positive number');
  }

  return {
    port,
    nodeEnv: process.env.NODE_ENV || 'development',
    requestTimeout: Number(process.env.REQUEST_TIMEOUT || 10000),
    headersTimeout: Number(process.env.HEADERS_TIMEOUT || 12000)
  };
}

module.exports = { getConfig };
