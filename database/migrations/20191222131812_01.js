exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl
      .integer("user_id")
      .notNullable()
      .primary();
    tbl
      .string("username", 123)
      .notNullable()
      .unique();
    tbl.string("password", 25).notNullable();
    tbl.boolean("public").default(true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
