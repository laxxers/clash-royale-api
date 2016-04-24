exports.up = function(knex, Promise) {
  return knex.schema.createTable('spells', function(t) {
    t.increments().primary();
    t.string('name', 150);
    t.string('image', 150);
    t.string('bio', 150);
    t.string('duration', 50);
    t.string('radius', 50);
    t.string('cost', 50);
    t.string('targets', 50);
    t.string('type', 50);
    t.string('rarity', 50);
    t.string('unlock_at', 50);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spells');
};
