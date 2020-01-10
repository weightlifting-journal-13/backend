const Workout = require("./workoutsModel");
const db = require("../../database/dbConfig");

describe("workouts-model", function() {
  beforeEach(async () => {
    await db("workouts").truncate();
    await db("records").truncate();
  });

  describe("findAllExercises()", function() {
    it("should return a list of all exercises", async function() {
      const exerciseList = await Workout.findAllExercises();

      expect(exerciseList).toHaveLength(83);
    });
  });

  describe("addWorkout", function() {
    it("should create an entry in the workouts table", async function() {
      const startingTable = await db("workouts").where("user_id", "=", 1);
      const initialLength = startingTable.length;
      expect(startingTable).toHaveLength(initialLength);

      await Workout.aaddWorkout(1, "my 17th workout", "a legs day");
      const endingTable = await db("workouts").where("user_id", "=", 1);
      const endingLength = endingTable.length;
      expect(endingTable).toHaveLength(endingLength);
    });
  });
});
