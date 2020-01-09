exports.seed = function(knex) {
  return knex("workouts").insert([
    {
      workout_id: 1,
      user_id: 0,
      workout_name: "Legs Day",
      workout_description: "Legs Routine to get you started"
    },
    {
      workout_id: 2,
      user_id: 0,
      workout_name: "Shoulders Day",
      workout_description: "Shoulders Routine to get you started"
    },
    {
      workout_id: 3,
      user_id: 0,
      workout_name: "Chest Day",
      workout_description: "Chest Routine to get you started"
    },
    {
      workout_id: 4,
      user_id: 0,
      workout_name: "Back Day",
      workout_description: "Back Routine to get you started"
    },
    {
      workout_id: 5,
      user_id: 0,
      workout_name: "Triceps Day",
      workout_description: "Triceps Routine to get you started"
    },
    {
      workout_id: 6,
      user_id: 0,
      workout_name: "Abs/Core Day",
      workout_description: "Abs / Core Routine to get you started"
    },
    {
      workout_id: 7,
      user_id: 0,
      workout_name: "Biceps Day",
      workout_description: "Biceps Routine to get you started"
    },
    {
      workout_id: 8,
      user_id: 0,
      workout_name: "BodyWeight Day",
      workout_description: "BodyWeight Routine to get you started"
    },
    {
      workout_id: 9,
      user_id: 0,
      workout_name: "Stretching",
      workout_description: "Stretch Routine to get you started"
    },
    {
      workout_id: 10,
      user_id: 0,
      workout_name: "Functional Training",
      workout_description: "Functional TrainRoutine to get you started"
    }
  ]);
};
