exports.up = function(knex) {
  return knex.schema.createTable("exercises", table => {
    table
      .integer("exercise_id")
      .increments()
      .notNullable();
    table
      .string("name", 60)
      .notNullable()
      .unique();
    table.string("target_region", 60).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("exercises");
};
