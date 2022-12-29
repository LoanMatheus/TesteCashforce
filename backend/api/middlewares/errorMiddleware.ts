import { ErrorRequestHandler } from 'express'

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ error: err.message })
  }

  res.status(500).json({ error: err.message })
}
