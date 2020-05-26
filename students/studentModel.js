const db = require("../database/dbConfig");

module.exports = {
  find,
  add,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db("students");
}

function findBy(id) {
  return db("students").where({ user_id: id });
}

async function add(student) {
  const [id] = await db("students").insert(student, "id");

  return findById(id);
}

function findById(id) {
  return db("students").where({ id }).first();
}

function update(id, changes) {
  return db("students").where({ id }).update(changes);
}

function remove(id) {
  return db("students").where({ id }).del();
}
