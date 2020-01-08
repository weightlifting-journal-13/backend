exports.up = function(knex) {
  return knex.schema.createTable("records", table => {
    table
      .integer("records_id")
      .notNullable()
      .primary();
    table
      .integer("exercise_id")
      .notNullable()
      .unsigned()
      .references("exercise_id")
      .inTable("exercises")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("rest_time", 20).notNullable();

    table.integer("sets", 2).notNullable();

    table.integer("reps", 2).notNullable();

    table.varchar("weight", 20).notNullable();

    table.integer("suggested_order", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("records");
};
