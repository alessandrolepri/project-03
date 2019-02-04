const router = require('express').Router()
const chickenShopController = require('../controllers/chickenShops')

router.route('/api/chickenshops')
  .get(chickenShopController.index)
  .post(chickenShopController.create)

router.route('/api/chickenshops/:id')
  .get(chickenShopController.show)

module.exports = router
