exports.up = function(knex) {
  return knex.schema.createTable("records", table => {
    table.integer("records_id").increments();
    table
      .integer("exercise_id")
      .notNullable()
      .references("exercise_id")
      .inTable("exercise")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .varchar("rest_time", 20)
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("sets", 2)
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("reps", 2)
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .varchar("weight", 20)
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("suggested_order", 2)
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("records");
};
