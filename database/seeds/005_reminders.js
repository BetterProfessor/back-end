exports.seed = function (knex, Promise) {
  return knex("reminders").insert([
    {
      my_username: "Sam",
      studentName: "Helen Lu",
      dueDate: "2020-08-08",
      dueTime: "09:29:30",
      reminder: "Lorem ipsum dolor sit amet",
    },
    {
      my_username: "Sam",
      studentName: "Penny Wen",
      dueDate: "2020-08-08",
      dueTime: "09:29:30",
      reminder: "Lorem ipsum dolor sit amet",
    },
  ]);
};
