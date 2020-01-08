exports.up = function(knex) {
  return (
    knex.schema.createTable("history_completed_records_jump"),
    table => {
      table
        .integer("jump_id")
        .notNullable()
        .primary();
      table
        .integer("history_id")
        .unsigned()
        .notNullable()
        .references("history_id")
        .inTable("history")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("completed_records_id")
        .notNullable()
        .unsigned()
        .references("completed_records_id")
        .inTable("completed_records")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    }
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("history_completed_records_jump");
};
