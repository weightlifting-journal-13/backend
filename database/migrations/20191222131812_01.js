exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
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
    })

    .createTable("exercises", table => {
      table
        .integer("exercise_id")
        .notNullable()
        .primary();
      table.string("name", 60).notNullable();
      table.string("target_region", 60).notNullable();
    })

    .createTable("workouts", table => {
      table
        .integer("workout_id")
        .notNullable()
        .primary();
      table
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users");
      // .onUpdate("CASCADE")
      // .onDelete("CASCADE");
      table
        .string("workout_name", 60)
        .notNullable()
        .unique();
      table.string("workout_description", 250);
    })
    .createTable("history", table => {
      table
        .integer("history_id")
        .notNullable()
        .primary();
      table
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users");
      // .onDelete("CASCADE")
      // .onUpdate("CASCADE");
      table
        .integer("workout_id")
        .unsigned()
        .notNullable()
        .references("workout_id")
        .inTable("workouts");
      // .onDelete("CASCADE")
      // .onUpdate("CASCADE");
      table.datetime("start_datetime").notNullable();
      table.datetime("stop_datetime").notNullable();
    })
    .createTable("records", table => {
      table
        .integer("records_id")
        .notNullable()
        .primary();
      table
        .integer("exercise_id")
        .notNullable()
        .unsigned()
        .references("exercise_id")
        .inTable("exercises");
      // .onDelete("CASCADE")
      // .onUpdate("CASCADE");
      table.string("rest_time", 20).notNullable();

      table.integer("sets", 2).notNullable();

      table.integer("reps", 2).notNullable();

      table.integer("weight", 20).notNullable();

      table.integer("suggested_order", 2).notNullable();
      table
        .integer("workout_id")
        .unsigned()
        .references("workout_id")
        .inTable("workouts")
        .notNullable();
      // .onDelete("CASCADE")
      // .onUpdate("CASCADE");
      table
        .integer("user_id", 20)
        .unsigned()
        .references("user_id")
        .inTable("users");
      // .onDelete("CASCADE")
      // .onUpdate("CASCADE");
    })
    .createTable("completed_records", table => {
      table
        .integer("completed_records_id")
        .notNullable()
        .primary();
      table
        .integer("exercise_id")
        .notNullable()
        .unsigned()
        .references("exercise_id")
        .inTable("exercises");
      table
        .integer("history_id")
        .unsigned()
        .notNullable()
        .references("history_id")
        .inTable("history");
      // .onDelete("CASCADE")
      // .onUpdate("CASCADE");
      table.string("rest_time", 20).notNullable();
      table.integer("sets", 2).notNullable();
      table.string("reps", 250).notNullable();
      table.string("weight", 50).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("completed_records")
    .dropTableIfExists("records")
    .dropTableIfExists("history")
    .dropTableIfExists("workouts")
    .dropTableIfExists("exercises")
    .dropTableIfExists("users");
};
