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

function findBy(username) {
  return db("projects").where({ my_username: username });
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
