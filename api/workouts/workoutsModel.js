const db = require("../../database/dbConfig");

module.exports = {
  findAllExercises,
  findPresets
};

function findAllExercises() {
  return db("exercises");
}
function findPresets() {
  let workouts = db("workouts")
    .innerJoin("workouts_records_jump", "workout_id", "=", "workout_id")
    .where("workout_id", "<", 11)
    .innerJoin("records", "records_id", "=", "records_id");

  return workouts;
}
