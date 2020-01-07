exports.seed = function(knex) {
  return knex("records").insert([
    //*Workout_id 1  legs day
    {
      records_id: 1,
      exercise_id: 9,
      rest_time: "1 min",
      sets: 4,
      reps: 10,
      weight: 100,
      suggested_order: 1
    },
    {
      records_id: 2,
      exercise_id: 11,
      rest_time: "1 min",
      sets: 4,
      reps: 5,
      weight: 100,
      suggested_order: 2
    },
    {
      records_id: 3,
      exercise_id: 10,
      rest_time: "1 min",
      sets: 4,
      reps: 8,
      weight: 100,
      suggested_order: 3
    },
    {
      records_id: 4,
      exercise_id: 13,
      rest_time: "1 min",
      sets: 4,
      reps: 8,
      weight: 80,
      suggested_order: 4
    },
    {
      records_id: 5,
      exercise_id: 14,
      rest_time: "1 min",
      sets: 3,
      reps: 15,
      weight: 140,
      suggested_order: 5
    },
    {
      records_id: 6,
      exercise_id: 15,
      rest_time: "1 min",
      sets: 4,
      reps: 8,
      weight: 70,
      suggested_order: 6
    },
    //* workout_id 2 shoulders day
    {
      records_id: 7,
      exercise_id: 17,
      rest_time: "1 min",
      sets: 3,
      reps: 10,
      weight: 65,
      suggested_order: 1
    },
    {
      records_id: 8,
      exercise_id: 18,
      rest_time: "1 min",
      sets: 3,
      reps: 10,
      weight: 65,
      suggested_order: 2
    },
    {
      records_id: 9,
      exercise_id: 19,
      rest_time: "1 min",
      sets: 3,
      reps: 10,
      weight: 65,
      suggested_order: 3
    },
    {
      records_id: 10,
      exercise_id: 20,
      rest_time: "1 min",
      sets: 4,
      reps: 10,
      weight: 20,
      suggested_order: 4
    },
    {
      records_id: 11,
      exercise_id: 21,
      rest_time: "1 min",
      sets: 4,
      reps: 15,
      weight: 30,
      suggested_order: 5
    },
    //*workout_id 3 "Chest Day
    {
      records_id: 12,
      exercise_id: 1,
      rest_time: "1 min",
      sets: 3,
      reps: 8,
      weight: 100,
      suggested_order: 5
    },
    {
      records_id: 13,
      exercise_id: 7,
      rest_time: "1 min",
      sets: 4,
      reps: 12,
      weight: 50,
      suggested_order: 1
    },
    {
      records_id: 14,
      exercise_id: 3,
      rest_time: "1 min",
      sets: 3,
      reps: 8,
      weight: 80,
      suggested_order: 2
    },
    {
      records_id: 15,
      exercise_id: 4,
      rest_time: "1 min",
      sets: 2,
      reps: 15,
      weight: 0,
      suggested_order: 3
    },
    {
      records_id: 16,
      exercise_id: 8,
      rest_time: "1 min",
      sets: 4,
      reps: 8,
      weight: 15,
      suggested_order: 4
    },
    //*workout_id 4 "Back Day
    {
      records_id: 17,
      exercise_id: 23,
      rest_time: "1 min",
      sets: 3,
      reps: 12,
      weight: 100,
      suggested_order: 1
    },
    {
      records_id: 18,
      exercise_id: 24,
      rest_time: "1 min",
      sets: 3,
      reps: 12,
      weight: 80,
      suggested_order: 2
    },
    {
      records_id: 19,
      exercise_id: 25,
      rest_time: "1 min",
      sets: 3,
      reps: 8,
      weight: 25,
      suggested_order: 3
    },
    {
      records_id: 20,
      exercise_id: 26,
      rest_time: "1 min",
      sets: 3,
      reps: 10,
      weight: 40,
      suggested_order: 4
    },
    {
      records_id: 21,
      exercise_id: 27,
      rest_time: "1 min",
      sets: 3,
      reps: 8,
      weight: 50,
      suggested_order: 5
    },
    {
      records_id: 22,
      exercise_id: 32,
      rest_time: "1 min",
      sets: 3,
      reps: 5,
      weight: 90,
      suggested_order: 6
    },

    //*workout_id 5 "Abs/Core
    {
      records_id: 23,
      exercise_id: 46,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 7
    },
    {
      records_id: 24,
      exercise_id: 47,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 6
    },
    {
      records_id: 25,
      exercise_id: 48,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 1
    },
    {
      records_id: 26,
      exercise_id: 49,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 2
    },
    {
      records_id: 27,
      exercise_id: 50,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 3
    },
    {
      records_id: 28,
      exercise_id: 51,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 4
    },
    {
      records_id: 29,
      exercise_id: 52,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 5
    },
    //*workout_id 6 "Biceps Day
    {
      records_id: 30,
      exercise_id: 41,
      rest_time: "1 min",
      sets: 2,
      reps: 10,
      weight: 40,
      suggested_order: 1
    },
    {
      records_id: 31,
      exercise_id: 42,
      rest_time: "1 min",
      sets: 4,
      reps: 10,
      weight: 40,
      suggested_order: 2
    },
    {
      records_id: 32,
      exercise_id: 43,
      rest_time: "1 min",
      sets: 4,
      reps: 10,
      weight: 40,
      suggested_order: 3
    },
    {
      records_id: 33,
      exercise_id: 44,
      rest_time: "1 min",
      sets: 2,
      reps: 12,
      weight: 10,
      suggested_order: 4
    },
    //*workout_id 7 "BodyWeight Day
    {
      records_id: 34,
      exercise_id: 72,
      rest_time: "1 min",
      sets: 3,
      reps: 15,
      weight: 0,
      suggested_order: 4
    },
    {
      records_id: 35,
      exercise_id: 82,
      rest_time: "1 min",
      sets: 3,
      reps: 15,
      weight: 0,
      suggested_order: 5
    },
    {
      records_id: 36,
      exercise_id: 74,
      rest_time: "1 min",
      sets: 3,
      reps: 15,
      weight: 0,
      suggested_order: 6
    },
    {
      records_id: 37,
      exercise_id: 75,
      rest_time: "1 min",
      sets: 3,
      reps: 15,
      weight: 0,
      suggested_order: 1
    },
    {
      records_id: 38,
      exercise_id: 76,
      rest_time: "1 min",
      sets: 3,
      reps: 15,
      weight: 0,
      suggested_order: 2
    },
    {
      records_id: 39,
      exercise_id: 77,
      rest_time: "1 min",
      sets: 3,
      reps: 15,
      weight: 0,
      suggested_order: 3
    },
    //*workout_id 8 "Stretching",
    {
      records_id: 40,
      exercise_id: 53,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 9
    },
    {
      records_id: 41,
      exercise_id: 54,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 8
    },
    {
      records_id: 42,
      exercise_id: 55,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 7
    },
    {
      records_id: 43,
      exercise_id: 56,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 1
    },
    {
      records_id: 44,
      exercise_id: 58,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 2
    },
    {
      records_id: 45,
      exercise_id: 61,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 3
    },
    {
      records_id: 46,
      exercise_id: 62,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 4
    },
    {
      records_id: 47,
      exercise_id: 63,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 5
    },
    {
      records_id: 48,
      exercise_id: 59,
      rest_time: "0 min",
      sets: 2,
      reps: 10,
      weight: 0,
      suggested_order: 6
    },
    //*workout_id 9 "Functional Training
    {
      records_id: 49,
      exercise_id: 64,
      rest_time: "1 min",
      sets: 3,
      reps: 6,
      weight: 100,
      suggested_order: 1
    },
    {
      records_id: 50,
      exercise_id: 65,
      rest_time: "1 min",
      sets: 3,
      reps: 6,
      weight: 0,
      suggested_order: 2
    },
    {
      records_id: 51,
      exercise_id: 66,
      rest_time: "1 min",
      sets: 3,
      reps: 6,
      weight: 0,
      suggested_order: 3
    },
    {
      records_id: 52,
      exercise_id: 67,
      rest_time: "1 min",
      sets: 3,
      reps: 6,
      weight: 50,
      suggested_order: 4
    },
    {
      records_id: 53,
      exercise_id: 68,
      rest_time: "1 min",
      sets: 3,
      reps: 6,
      weight: 75,
      suggested_order: 5
    },
    {
      records_id: 54,
      exercise_id: 69,
      rest_time: "1 min",
      sets: 3,
      reps: 6,
      weight: 75,
      suggested_order: 6
    }
    //*Start of Custom Exercise plans
    // {records_id: 55, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 56, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 57, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 58, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 59, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 60, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 61, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 62, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 63, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 64, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 65, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 66, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 67, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 68, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 69, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 70, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 71, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 72, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 73, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 74, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 75, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 76, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 77, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 78, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 79, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 80, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 81, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 82, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 83, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 84, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 85, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 86, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 87, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 88, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 89, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 90, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 91, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 92, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 93, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 94, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 95, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 96, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 97, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 98, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 99, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
    // {records_id: 100, exercise_id: 1, rest_time: "1 min", sets: 4, reps: 10, weight: 100, suggested_order: 1},
  ]);
};
