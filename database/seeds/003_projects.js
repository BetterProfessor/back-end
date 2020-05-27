exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      my_username: "Sam",
      projectName: "Adding data to the database",
      projectType: "Needs My Feedback",
    },
    {
      my_username: "Ken",
      projectName: "Data Types in SQL",
      projectType: "Dur from student",
    },
    {
      my_username: "Wendy",
      projectName: "The CREATE TABLE statement",
      projectType: "Needs My Review",
    },
  ]);
};
