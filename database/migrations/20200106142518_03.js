exports.up = function(knex) {
  return knex.schema.createTable("workouts", table => {
    table
      .integet("workout_id")
      .increments()
      .notNullable();
    table
      .integer("user_id")
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .string("workout_name", 60)
      .notNullable()
      .unique();
    table.string("workout_description");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workouts");
};
