var dataProvider = require('../models'),

  troops;

troops = {
  browse: function browse() {
    return dataProvider.Troop.findAll().then(function(troops) {
      return {
        troops: troops
      }
    })
  }
}

module.exports = troops;
