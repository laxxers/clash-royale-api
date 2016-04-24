var dataProvider = require('../models'),

  experiences;

experiences = {
  browse: function browse() {
    return dataProvider.Experience.findAll().then(function(experiences) {
      return {
        experiences: experiences
      }
    })
  }
}

module.exports = experiences;
