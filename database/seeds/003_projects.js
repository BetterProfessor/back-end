exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      user_id: 1,
      projectName: "Adding data to the database",
      projectType: "Needs My Feedback",
    },
    {
      user_id: 1,
      projectName: "Data Types in SQL",
      projectType: "Dur from student",
    },
    {
      user_id: 1,
      projectName: "The CREATE TABLE statement",
      projectType: "Needs My Review",
    },
  ]);
};
