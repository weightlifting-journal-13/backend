exports.up = function(knex) {
  return knex.schema.createTable("completed_records", table => {
    table
      .integer("completed_records_id")
      .increments()
      .notNullable();
    table
      .integer(exercise_id)
      .notNullable()
      .references("exercise_id")
      .inTable("exercises");
    table.string("rest_time", 20).notNullable();
    table.integer("sets", 2).notNullable();
    table.string("reps", 250).notNullable();
    table.string("weight", 50).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("completed_records");
};
