exports.up = function(knex, Promise) {
  return knex.schema.createTable('experiences', function(t) {
    t.integer('level').primary();
    t.integer('arena_tower_hp');
    t.integer('arena_tower_damage');
    t.integer('king_tower_hp');
    t.integer('king_tower_damange');
    t.integer('next_level_experience_needed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('experiences');
};
