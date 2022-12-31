const { Router } = require('express')
const { OrderController } = require('../controllers/Controllers')

const router = Router()

router
  .route('/')
  .get(
    (req, res) => new OrderController(req, res).getAll()
  );

module.exports = router
