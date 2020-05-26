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
  return db("projects");
}

function findBy(id) {
  return db("projects").where({ user_id: id });
}

async function add(project) {
  const [id] = await db("projects").insert(project, "id");

  return findById(id);
}

function findById(id) {
  return db("projects").where({ id }).first();
}

function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}
