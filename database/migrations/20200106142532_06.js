exports.up = function(knex) {
  return knex.schema.createTable("workouts_records_jump", table => {
    table
      .integer("jump_id")
      .notNullable()
      .primary();
    table
      .integer("workout_id")
      .unsigned()
      .references("workout_id")
      .inTable("workouts")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("records_id")
      .unsigned()
      .references("records_id")
      .inTable("records")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workouts_records_jump");
};
