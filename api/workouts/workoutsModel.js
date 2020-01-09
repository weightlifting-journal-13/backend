const db = require("../../database/dbConfig");

module.exports = {
  findAllExercises,
  findPresets,
  addWorkout,
  addRecordsToWorkout,
  findBy,
  returnAllWorkouts
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

function getAllWorkouts(user_id) {
  //! get all workout id's related to user,
  // get all records associated with each id

  let fullTable = db("workouts as W")
    .where({ user_id })
    .innerJoin(
      "workouts_records_jump as WRJ",
      "W.workout_id",
      "=",
      "WRJ.workout_id"
    )
    .innerJoin("records as R", "WRJ.records_id", "=", "R.records_id");

  return fullTable;
}

function findBy(filter) {
  return db
    .select("*")
    .from("workouts")
    .where(filter);
}

function returnAllWorkouts(user_id, workout_id) {
  return new Promise((resolve, reject) => {
    db.select("*")
      .from("workouts")
      .leftJoin("records", function() {
        this.on(function() {
          this.on("records.user_id", "=", "workouts.user_id");
          this.andOn("records.workout_id", "=", "workouts.workout_id");
        });
      })
      .where({ "workouts.user_id": user_id })
      .then(response => {
        console.log(response, "response from new function");
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function addRecordsToWorkout(records, workout_id) {
  return new Promise((resolve, reject) => {
    db("records")
      .insert(records)
      .then(res => {
        console.log(res, "res");
        db("records")
          .select("records_id")
          .where({ workout_id })
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            console.log("inner error", error);
            reject(error);
          });
      })
      .catch(error => {
        console.log("outter error", error);
      });
  });
}

function addWorkout(user_id, workout_name, workout_description) {
  console.log(user_id, workout_name, workout_description);
  return new Promise((resolve, reject) => {
    db("workouts")
      .insert({
        user_id: user_id,
        workout_name: workout_name,
        workout_description: workout_description
      })
      .then(res => {
        db("workouts")
          .select("workout_id")
          .where({ user_id, workout_name })
          .then(WID => {
            resolve(WID);
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
}

// map[([{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}])];

// res.forEach(nestedArr => {
//   nestedArr.map((eachExercise, index) => {
//     return;
//     <card eachExercise={eachExercise} key={index}></card>;
//   });
// })[({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {})];

// function grouping(arr) {
//   let groupedArr = [];
//   let count = {};

//   arr.forEach(obj => {
//     count = { ...count, [obj.workout_id]: obj.workout_id };
//   });
// }
