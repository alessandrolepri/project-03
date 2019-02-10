const City = require('../models/city')

function indexRoute(req, res, next) {
  City
    .find()
    .then(cities => res.json(cities))
    .catch(next)
}

function showRoute(req, res, next) {
  City
    .findById(req.params.id)
    .populate('posts')
    .populate({ path: 'continent', select: 'name' })
    .then(cities => res.json(cities))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
