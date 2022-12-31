const express = require('express');
const routes = require('./routes/orderRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware')

class App {

  constructor() {
    this.app = express()

    this.config()

    this.routes()
  };

  config() {
    this.app.use(express.json())
  };

  routes() {
    this.app.use('/orders', routes)
    this.app.use(errorMiddleware)
  };

  start(PORT) {
    this.app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`))
  }
}

module.exports = App
