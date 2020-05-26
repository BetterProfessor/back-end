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
  return db("reminders");
}

function findBy(id) {
  return db("reminders").where({ user_id: id });
}

async function add(project) {
  const [id] = await db("reminders").insert(project, "id");

  return findById(id);
}

function findById(id) {
  return db("reminders").where({ id }).first();
}

function update(id, changes) {
  return db("reminders").where({ id }).update(changes);
}

function remove(id) {
  return db("reminders").where({ id }).del();
}
