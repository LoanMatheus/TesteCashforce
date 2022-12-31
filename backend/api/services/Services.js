const { orders, buyers, providers } = require('../../database/models')

class OrderService {
  async getAll() {
    const data = await orders.findAll({
      include: [
        { model: buyers, as: 'buyer', attributes: ['name'] },
        { model: providers, as: 'provider', attributes: ['name'] },
      ],
      attributes: { exclude: ['buyerId', 'cnpjId', 'userId', 'providerId'] },
    })
    if (!data) {
      return {
        status: 404,
        error: { message: 'Not found' }
      }
    }
    return { status: 200, data }
  }
}
module.exports = {
  OrderService,
}