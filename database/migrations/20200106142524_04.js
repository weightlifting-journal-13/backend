exports.up = function(knex) {
  return knex.schema.createTable("history", table => {
    table
      .integer("history_id")
      .increments()
      .notNullable();
    table
      .integer(user_id)
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.datetime("start_datetime").notNullable();
    table.datetime("stop_datetime").notNullable();
    table
      .integer("workout_id")
      .references("workout_id")
      .inTable("workouts")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("history");
};
