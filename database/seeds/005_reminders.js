exports.seed = function (knex, Promise) {
  return knex("reminders").insert([
    {
      user_id: 1,
      studentName: "Helen Lu",
      dueDate: "2020-08-08",
      dueTime: "09:29:30",
      reminder: "Lorem ipsum dolor sit amet",
    },
    {
      user_id: 1,
      studentName: "Penny Wen",
      dueDate: "2020-08-08",
      dueTime: "09:29:30",
      reminder: "Lorem ipsum dolor sit amet",
    },
  ]);
};
