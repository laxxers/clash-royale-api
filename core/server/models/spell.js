var Royale = require('./base'),

  Spell,
  Spells;

Spell = Royale.Model.extend({
  tableName: 'spells',

  arena: function arena() {
    return this.belongsTo('Arena', 'unlock_at');
  }
}, {
  findAll: function findAll(options) {
    options = options || {};
    options.withRelated = ['arena'];
    return Royale.Model.findAll.call(this, options);
  }
});

Spells = Royale.Collection.extend({
  model: Spell
});

module.exports = {
  Spell: Royale.model('Spell', Spell),
  Spells: Royale.collection('Spells', Spells)
}
