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
      res.status(500).json({
        errorMessage: "internal error fetching list of preset workouts"
      });
    });
});


router.post("/create", (req, res) => {
  let { user_id, workout_name, workout_description, records } = req.body;

  if (!user_id || !workout_name || !workout_description || !records) {
    res
      .status(404)
      .json("there is a missing required field")
      .end();
  } else if (records.length == 0) {
    res
      .status(404)
      .json("cannot create workout plan without at least 1 exercise");
  }

  let wID;

  Workout.addWorkout(user_id, workout_name, workout_description)
    .then(idArray => {
      const { workout_id } = idArray[0];
      wID = workout_id;
      let modifiedRecords = records.map(eachObj => ({
        ...eachObj,
        workout_id,
        user_id
      }));
      //   console.log(modifiedRecords, "modR");
    Workout.addRecordsToWorkout(modifiedRecords, workout_id)
        .then(response => {
        console.log("res from addRecordsToWorkout", response);
        Workout.returnAllWorkouts(user_id, wID)
            .then(allWorkoutResponse => {
            res.status(200).json(allWorkoutResponse);
            })
            .catch(error => {
            console.log("errror after allworkoutresponse", error);
            });
        })
        .catch(err => {
          console.log("error from addRecordsToWorkout", err);
          res.status(500).json({ errorMessage: "internal error creating " });
        });
    })
    .catch(error => {
      console.log(error, "Error from error");
      res.status(500).json({ errorMessage: "internal error creating " });
    });
});

module.exports = router;
