exports.up = function(knex) {
  return knex.schema.createTable("workouts", table => {
    table
      .integer("workout_id")
      .notNullable()
      .primary();
    table
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .string("workout_name", 60)
      .notNullable()
      .unique();
    table.string("workout_description", 250);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workouts");
};
