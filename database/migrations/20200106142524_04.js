exports.up = function(knex) {
  return knex.schema.createTable("history", table => {
    table
      .integer("history_id")
      .notNullable()
      .primary();
    table
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("workout_id")
      .unsigned()
      .notNullable()
      .references("workout_id")
      .inTable("workouts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.datetime("start_datetime").notNullable();
    table.datetime("stop_datetime").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("history");
};
