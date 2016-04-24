var Royale = require('./base'),

  Arena,
  Arenas;

Arena = Royale.Model.extend({
  tableName: 'arenas',

  troops: function troops() {
    return this.hasMany('Troop', 'unlock_at')
  }
}, {
  findAll: function findAll(options) {
    options = options || {};
    options.withRelated = ['troops'];
    return Royale.Model.findAll.call(this, options);
  }
});

Arenas = Royale.Collection.extend({
  model: Arena
});

module.exports = {
  Arena: Royale.model('Arena', Arena),
  Arenas: Royale.collection('Arenas', Arenas)
}
