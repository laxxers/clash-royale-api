exports.up = function(knex, Promise) {
  return knex.schema.createTable('troops', function(t) {
    t.increments().primary();
    t.string('name', 150);
    t.string('image', 150);
    t.string('bio', 254);
    t.string('hit_speed', 50);
    t.string('speed', 50);
    t.string('deploy_time', 50);
    t.string('range', 50);
    t.string('target', 50);
    t.string('cost', 50);
    t.string('count', 50);
    t.string('type', 50);
    t.string('rarity', 50);
    t.string('unlock_at', 50);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('troops');
};
