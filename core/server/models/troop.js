var Royale = require('./base'),

  Troop,
  Troops;

Troop = Royale.Model.extend({
  tableName: 'troops',

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

Troops = Royale.Collection.extend({
  model: Troop
});

module.exports = {
  Troop: Royale.model('Troop', Troop),
  Troops: Royale.collection('Troops', Troops)
}
