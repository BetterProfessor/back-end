exports.seed = function (knex, Promise) {
  return knex("project_students").insert([
    { project_id: "1", student_id: "1" },
    { project_id: "1", student_id: "2" },
    { project_id: "1", student_id: "8" },
    { project_id: "2", student_id: "3" },
    { project_id: "2", student_id: "4" },
    { project_id: "2", student_id: "5" },
    { project_id: "2", student_id: "7" },
    { project_id: "3", student_id: "6" },
    { project_id: "3", student_id: "7" },
    { project_id: "3", student_id: "8" },
  ]);
};
