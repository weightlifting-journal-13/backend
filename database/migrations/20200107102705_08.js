exports.up = function(knex) {
  return (
    knex.schema.createTable("history_completed_records_jump"),
    table => {
      table
        .integer("history_id")
        .references("history_id")
        .inTable("history")
        .notNullable();
      table
        .integer("completed_records_id")
        .references("completed_records_id")
        .inTable("completed_records")
        .notNullable();
    }
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("history_completed_records_jump");
};
