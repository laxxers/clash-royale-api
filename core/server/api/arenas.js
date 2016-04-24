var dataProvider = require('../models'),

  arenas;

arenas = {
  browse: function browse() {
    return dataProvider.Arena.findAll().then(function(arenas) {
      return {
        arenas: arenas
      }
    })
  }
}

module.exports = arenas;
