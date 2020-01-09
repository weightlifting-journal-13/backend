const db = require("../../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db
    .select("*")
    .from("users")
    .where(filter);
}

function findById(user_id) {
  return db("users")
    .where({ user_id })
    .first();
}

async function add(user) {
  const [user_id] = await db("users").insert(user);
  return findById(user_id);
}
