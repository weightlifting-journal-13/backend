const router = require("express").Router();

const Workout = require("./workoutsModel");

router.delete("/delete", (req, res) => {
  const { workout_id, user_id } = req.body;
  if (!workout_id) {
    res
      .status(404)
      .json({ errrorMessage: "workout_id is required to delete a workout" })
      .end();
  } else if (!user_id) {
    res.status(404).json({ errorMessage: "missing user_id" });
  }
  Workout.removeWorkoutAndRecords(workout_id, user_id)
    .then(removed => {
      console.log(removed, "removed response from delete by workout_id");
      const workoutLessRemoved = grouping(removed.response3);
      res.status(200).json({
        status: "successfully deleted workout and associated exercises",
        exercises_removed: removed.response,
        workouts_removed: removed.response2,
        all_workouts: workoutLessRemoved
      });
    })
    .catch(error => {
      console.log(error, "error from delete request");
      res
        .status(500)
        .json({ errorMessage: "error deleting requested workout" });
    });
});

router.put("/update", (req, res) => {
  const { workout_id, records } = req.body;
  Workout.update(workout_id, records)
    .then(changed => {
      //console.log(changed, 'response from put /update');
      res
        .status(200)
        .json({ response: changed.response, response2: changed.response2 });
    })
    .catch(error => {
      console.log(error, "Error from get /update");
      res.status(500).json({
        errorMessage: "internal error updating the specified workout "
      });
    });
});

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

router.get("/all_workouts", (req, res) => {
  const { user_id } = req.body;
  if (!user_id) {
    res.status(404).json({
      errorMessage:
        "Did not recieve user_id which is required to fetch the list of workouts"
    });
  }
  Workout.returnAllWorkouts(user_id)
    .then(arrayOfExerciseEntries => {
      const modifiedShape = grouping(arrayOfExerciseEntries);
      res.status(200).json(modifiedShape);
      // res.status(200).json(arrayOfExerciseEntries);
    })
    .catch(error => {
      console.log(error, "Error from get /exercises");
      res.status(500).json({
        errorMessage: "internal error fetching workouts list by user_id"
      });
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
      .json("cannot create workout plan without at least 1 exercise")
      .end();
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
          res.status(500).json({ errorMessage: "2 internal error creating " });
        });
    })
    .catch(error => {
      console.log(error, "Error from error");
      res.status(500).json({ errorMessage: "1 internal error creating " });
    });
});

function grouping(arr) {
  let groupedArr = [];
  let count = {};
  arr.forEach(obj => {
    if (count[obj.workout_id]) {
      console.log("made it");
      count[obj.workout_id].push(obj);
      console.log(count, "count");
    } else {
      count = {
        ...count,
        [obj.workout_id]: [obj]
      };
    }
  });
  for (workout in count) {
    groupedArr.push(count[workout]);
  }
  return groupedArr;
}

module.exports = router;
