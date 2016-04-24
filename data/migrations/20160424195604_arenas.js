exports.up = function(knex, Promise) {
  return knex.schema.createTable('arenas', function(t) {
    t.increments().primary();
    t.string('arena', 50);
    t.string('trophies', 50);
    t.string('demotion_at', 254);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('arenas');
};
