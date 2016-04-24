var Royale = require('./base'),

  Experience,
  Experiences;

Experience = Royale.Model.extend({
  tableName: 'experiences',
}, {
  findAll: function findAll(options) {
    options = options || {};
    return Royale.Model.findAll.call(this, options);
  }
});

Experiences = Royale.Collection.extend({
  model: Experience
});

module.exports = {
  Experience: Royale.model('Experience', Experience),
  Experiences: Royale.collection('Experiences', Experiences)
}
