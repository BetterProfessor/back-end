exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();

      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();
      tbl.string("email", 256).notNullable().unique();
    })
    .createTable("students", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      tbl.string("studentName", 256).notNullable().unique();
      tbl.string("studentEmail", 256).notNullable().unique();
    })
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      tbl.string("projectName", 256).notNullable();
      tbl.string("projectType", 256).notNullable();
    })
    .createTable("reminders", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      tbl
        .string("studentName")
        .unsigned()
        .notNullable()
        .references("studentName")
        .inTable("students");
      tbl.date("dueDate", 256).notNullable();
      tbl.time("dueTime", 256).notNullable();
      tbl.text("reminder", 256).notNullable();
    })
    .createTable("project_students", (tbl) => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .integer("student_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("students");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_students")
    .dropTableIfExists("reminders")
    .dropTableIfExists("projects")
    .dropTableIfExists("students")
    .dropTableIfExists("users");
};
