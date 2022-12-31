const { ErrorRequestHandler } = require('express')

const errorMiddleware = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ error: err.message })
  }

  res.status(500).json({ error: err.message })
}

module.exports = errorMiddleware