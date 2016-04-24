var _ = require('lodash'),

  arenas = require('./arenas'),
  experiences = require('./experiences'),
  spells = require('./spells'),
  troops = require('./troops'),

  http;

http = function(apiMethod) {
  return function(req, res) {
    var options = _.extend(req.body, req.query, req.params),
      apiContext = {
        user: req.session && req.session.user
      }

    return apiMethod.call(apiContext, options).then(function(result) {
      res.json(result || {})
    }).catch(function(error) {
      res.status(error.status).send({ status: error.status, message: error.message, type: error.type });
    });
  }
}

module.exports = {
  arenas: arenas,
  experiences: experiences,
  spells: spells,
  troops: troops,
  http: http
}
