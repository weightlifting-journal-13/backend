const db = require("../../database/dbConfig");

module.exports = {
  findAllExercises,
  findBy,
  returnAllWorkouts,
  addWorkout,
  addRecordsToWorkout
};

function findAllExercises() {
  return db("exercises");
}

function findBy(filter) {
  return db
    .select("*")
    .from("workouts")
    .where(filter);
}

function returnAllWorkouts(user_id) {
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

// res.forEach(nestedArr => {
//   nestedArr.map((eachExercise, index) => {
//     return;
//     <card eachExercise={eachExercise} key={index}></card>;
//   });
// })
