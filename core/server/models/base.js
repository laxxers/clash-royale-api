var bookshelf = require('bookshelf'),
  knex = require('knex'),

  Royale;

Royale = bookshelf(knex({
  client: 'sqlite3',
  connection: {
    filename: './data/royale.sqlite3'
  }
}));

Royale.plugin('registry');

Royale.Model = Royale.Model.extend({

}, {
  findAll: function findAll(options, args) {
    options = options || {};
    return Royale.Collection.forge([], { model: this }).fetch(options);
  },

  findOne: function findOne(args, options) {
    options = options || {};
    return this.forge(args).fetch(options);
  }
});

module.exports = Royale;
