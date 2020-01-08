const router = require("express").Router();

const Workout = require("./workoutsModel");

router.get("/exercises", (req, res) => {
  Workout.findAllExercises()
    .then(exerciseList => {
      //console.log(exerciseList, 'response from GET /exercises');
      res.status(200).json(exerciseList);
    })
    .catch(error => {
      console.log(error, "Error from get /exercises");
      res
        .status(500)
        .json({ errorMessage: "internal error fetching exercise list" });
    });
});

router.get("/presets", (req, res) => {
  Workout.findPresets()
    .then(presets => {
      //console.log(presets, 'response from GET /presets');
      res.status(200).json(presets);
    })
    .catch(error => {
      console.log(error, "Error from get /presets");
      res
        .status(500)
        .json({
          errorMessage: "internal error fetching list of preset workouts"
        });
    });
});
