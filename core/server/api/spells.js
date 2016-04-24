var dataProvider = require('../models'),

spells;

spells = {
  browse: function browse() {
    return dataProvider.Spell.findAll().then(function(spells) {
      return {
        spells: spells
      }
    })
  }
}

module.exports = spells;
