const ChickenShop = require('../models/chickenShop')

function indexRoute(req, res) {
  ChickenShop
    .find()
    .then(shops => res.status(200).json(shops))
}

function createRoute(req, res) {
  ChickenShop
    .create(req.body)
    .then(shop => res.status(200).json(shop))
    .catch(err => console.log(err.message))
}

function showRoute(req, res) {
  ChickenShop
    .findById(req.params.id)
    .then(shop => res.status(200).json(shop))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute
}
