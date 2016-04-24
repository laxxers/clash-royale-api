var Promise = require('bluebird'),
  _ = require('lodash'),

  exports,
  models;

models = [
  'arena',
  'experience',
  'spell',
  'troop'
];

function init() {
  exports.Base = require('./base');

  models.forEach(function(name) {
    _.extend(exports, require('./' + name));
  });

  return Promise.resolve();
}

exports.init = init;
