exports.seed = function(knex) {
  return knex("workouts").insert([
    {
      workout_id: 1,
      user_id: 0,
      name: "Legs Day",
      description: "Legs Routine to get you started"
    },
    {
      workout_id: 2,
      user_id: 0,
      name: "Shoulders Day",
      description: "Shoulders Routine to get you started"
    },
    {
      workout_id: 3,
      user_id: 0,
      name: "Chest Day",
      description: "Chest Routine to get you started"
    },
    {
      workout_id: 4,
      user_id: 0,
      name: "Back Day",
      description: "Back Routine to get you started"
    },
    {
      workout_id: 5,
      user_id: 0,
      name: "Triceps Day",
      description: "Triceps Routine to get you started"
    },
    {
      workout_id: 6,
      user_id: 0,
      name: "Abs/Core Day",
      description: "Abs / Core Routine to get you started"
    },
    {
      workout_id: 7,
      user_id: 0,
      name: "Biceps Day",
      description: "Biceps Routine to get you started"
    },
    {
      workout_id: 8,
      user_id: 0,
      name: "BodyWeight Day",
      description: "BodyWeight Routine to get you started"
    },
    {
      workout_id: 9,
      user_id: 0,
      name: "Stretching",
      description: "Stretch Routine to get you started"
    },
    {
      workout_id: 10,
      user_id: 0,
      name: "Functional Training",
      description: "Functional TrainRoutine to get you started"
    }
  ]);
};
