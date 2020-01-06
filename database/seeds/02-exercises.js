const exercises = [
  { exercise_id: 1, name: "Flat Bench Press", target_region: "Chest" },
  { exercise_id: 2, name: "Incline Bench Press", target_region: "Chest" },
  { exercise_id: 3, name: "Decline Bench Press", target_region: "Chest" },
  { exercise_id: 4, name: "Push Ups", target_region: "Chest" },
  { exercise_id: 5, name: "Flat Dumbbell Press", target_region: "Chest" },
  { exercise_id: 6, name: "Dips", target_region: "Chest" },
  { exercise_id: 7, name: "Cable CrossOvers", target_region: "Chest" },
  { exercise_id: 8, name: "Dumbbell Flys", target_region: "Chest" },
  { exercise_id: 9, name: "Squat", target_region: "Legs" },
  { exercise_id: 10, name: "Lunges", target_region: "Legs" },
  { exercise_id: 11, name: "Deadlifts", target_region: "Legs" },
  { exercise_id: 12, name: "Leg Curls", target_region: "Legs" },
  { exercise_id: 13, name: "Hamstring Curls", target_region: "Legs" },
  { exercise_id: 14, name: "Calf Raises", target_region: "Legs" },
  { exercise_id: 15, name: "Hungarian Squat", target_region: "Legs" },
  { exercise_id: 16, name: "Sumo Squat", target_region: "Legs" },
  { exercise_id: 17, name: "Seated Press", target_region: "Shoulders" },
  { exercise_id: 18, name: "Upright Row", target_region: "Shoulders" },
  { exercise_id: 19, name: "Cable Raises", target_region: "Shoulders" },
  { exercise_id: 20, name: "Side Raises", target_region: "Shoulders" },
  { exercise_id: 21, name: "Kettle Bell Swing", target_region: "Shoulders" },
  {
    exercise_id: 22,
    name: "Barbell Overhead Press",
    target_region: "Shoulders"
  },
  { exercise_id: 23, name: "Lat Pull Downs", target_region: "Back" },
  { exercise_id: 24, name: "Seated Row", target_region: "Back" },
  { exercise_id: 25, name: "Bent Over Dumbbell Row", target_region: "Back" },
  { exercise_id: 26, name: "Lower Back Raises", target_region: "Back" },
  { exercise_id: 27, name: "Standing Pull Ups", target_region: "Back" },
  { exercise_id: 28, name: "Good Morning", target_region: "Back" },
  { exercise_id: 29, name: "Wide Grip Pullups", target_region: "Back" },
  { exercise_id: 30, name: "Shrugs", target_region: "Back" },
  { exercise_id: 31, name: "Dumbbell Dead Row", target_region: "Back" },
  { exercise_id: 32, name: "BarBell Row", target_region: "Back" },
  {
    exercise_id: 33,
    name: "Standing Cable Extensions",
    target_region: "Triceps"
  },
  { exercise_id: 34, name: "Skull Crusher", target_region: "Triceps" },
  {
    exercise_id: 35,
    name: "Bent Over Dumbbell Extension",
    target_region: "Triceps"
  },
  { exercise_id: 36, name: "Dips", target_region: "Triceps" },
  { exercise_id: 37, name: "Weighted Pushup", target_region: "Triceps" },
  { exercise_id: 38, name: "Close Grip Pin Press", target_region: "Triceps" },
  { exercise_id: 39, name: "Tricep Pushaways", target_region: "Triceps" },
  { exercise_id: 40, name: "Drag Pushdowns", target_region: "Triceps" },
  { exercise_id: 41, name: "Dumbbell Curls", target_region: "Biceps" },
  { exercise_id: 42, name: "Preacher Curls", target_region: "Biceps" },
  { exercise_id: 43, name: "Hammer Curls", target_region: "Biceps" },
  { exercise_id: 44, name: "Weighted Chin Ups", target_region: "Biceps" },
  { exercise_id: 46, name: "Sit Ups", target_region: "Abs & Core" },
  { exercise_id: 45, name: "Decline Sit Ups", target_region: "Abs & Core" },
  { exercise_id: 47, name: "Dragon Flags", target_region: "Abs & Core" },
  { exercise_id: 48, name: "Bicycle Crunches", target_region: "Abs & Core" },
  { exercise_id: 49, name: "Russian Twist", target_region: "Abs & Core" },
  { exercise_id: 50, name: "Hanging Leg Raises", target_region: "Abs & Core" },
  { exercise_id: 51, name: "Hanging Knee Raises", target_region: "Abs & Core" },
  {
    exercise_id: 52,
    name: "Decline Reverse Crunches",
    target_region: "Abs & Core"
  },
  {
    exercise_id: 53,
    name: "Standing Hamstring Stretch",
    target_region: "Stretching"
  },
  {
    exercise_id: 54,
    name: "Standing Quad Stretch",
    target_region: "Stretching"
  },
  { exercise_id: 55, name: "Piriformis Stretch", target_region: "Stretching" },
  {
    exercise_id: 56,
    name: "Lunge With Spinal Twist",
    target_region: "Stretching"
  },
  { exercise_id: 57, name: "Triceps Stretch", target_region: "Stretching" },
  { exercise_id: 58, name: "Figure Four Stretch", target_region: "Stretching" },
  { exercise_id: 59, name: "Frog Stretch", target_region: "Stretching" },
  { exercise_id: 60, name: "Butterfly Stretch", target_region: "Stretching" },
  { exercise_id: 61, name: "Side Bend Stretch", target_region: "Stretching" },
  {
    exercise_id: 62,
    name: "Lunging Hip Flexor Stretch",
    target_region: "Stretching"
  },
  {
    exercise_id: 63,
    name: "Knee To Chest Stretch",
    target_region: "Stretching"
  },
  { exercise_id: 64, name: "Sled Push", target_region: "Functional Training" },
  { exercise_id: 65, name: "Tire Flips", target_region: "Functional Training" },
  { exercise_id: 66, name: "Box Jumps", target_region: "Functional Training" },
  {
    exercise_id: 67,
    name: "Kettle Bell Swings",
    target_region: "Functional Training"
  },
  { exercise_id: 68, name: "Sled Pull", target_region: "Functional Training" },
  { exercise_id: 69, name: "Sled Rows", target_region: "Functional Training" },
  { exercise_id: 60, name: "Sled Lunge", target_region: "Functional Training" },
  {
    exercise_id: 71,
    name: "Sled Bear Crawl",
    target_region: "Functional Training"
  },
  { exercise_id: 72, name: "Air Squat", target_region: "BodyWeight Exercises" },
  { exercise_id: 73, name: "Burpees", target_region: "BodyWeight Exercises" },
  {
    exercise_id: 74,
    name: "Walking Lunges",
    target_region: "BodyWeight Exercises"
  },
  {
    exercise_id: 75,
    name: "Lunge Jumps",
    target_region: "BodyWeight Exercises"
  },
  {
    exercise_id: 76,
    name: "Single Leg Squat",
    target_region: "BodyWeight Exercises"
  },
  { exercise_id: 77, name: "Pushups", target_region: "BodyWeight Exercises" },
  {
    exercise_id: 78,
    name: "Lateral Squat",
    target_region: "BodyWeight Exercises"
  },
  {
    exercise_id: 79,
    name: "Static Lunge",
    target_region: "BodyWeight Exercises"
  },
  {
    exercise_id: 80,
    name: "Single Leg Deadlift",
    target_region: "BodyWeight Exercises"
  },
  {
    exercise_id: 81,
    name: "Scissor Kicks",
    target_region: "BodyWeight Exercises"
  },
  {
    exercise_id: 82,
    name: "Bulgarian Split Squat",
    target_region: "BodyWeight Exercises"
  },
  {
    exercise_id: 83,
    name: "Single Leg Box Squat",
    target_region: "BodyWeight Exercises"
  }
  // {exercise_id: 84, name: "", target_region: ""},
  // {exercise_id: 85, name: "", target_region: ""},
  // {exercise_id: 86, name: "", target_region: ""},
  // {exercise_id: 87, name: "", target_region: ""},
  // {exercise_id: 88, name: "", target_region: ""},
  // {exercise_id: 89, name: "", target_region: ""},
  // {exercise_id: 90, name: "", target_region: ""},
  // {exercise_id: 91, name: "", target_region: ""},
  // {exercise_id: 92, name: "", target_region: ""},
  // {exercise_id: 93, name: "", target_region: ""},
  // {exercise_id: 94, name: "", target_region: ""},
  // {exercise_id: 95, name: "", target_region: ""}
];

exports.seed = function(knex) {
  return knex("exercises").insert(exercises);
};
