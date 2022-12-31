const { OrderService } = require('../services/Services');

class OrderController {
  constructor(req, res) {
    this.req = req
    this.res = res
    this.service = new OrderService()
  }

  async getAll() {
    const { status, data, error } = await this.service.getAll()
    return error
      ? this.res.status(status).json(error)
      : this.res.status(status).json(data)
  }
}
module.exports = {
  OrderController,
}