exports.seed = function (knex, Promise) {
  return knex("students").insert([
    { user_id: 1, studentName: "Helen Lu", studentEmail: "hellenlu@gmail.com" },
    {
      user_id: 1,
      studentName: "Penny Wen",
      studentEmail: "pennywen@gmail.com",
    },
    { user_id: 1, studentName: "Judy Qua", studentEmail: "judyqua@gmail.com" },
    { user_id: 1, studentName: "Yee Lin", studentEmail: "yeelin@gmail.com" },
    { user_id: 1, studentName: "Kenny Ho", studentEmail: "kennyho@gmail.com" },
    { user_id: 1, studentName: "May Ken", studentEmail: "mayken@gmail.com" },
    { user_id: 1, studentName: "Ana Doo", studentEmail: "anadoo@gmail.com" },
    { user_id: 1, studentName: "Tina Gin", studentEmail: "tinagin@gmail.com" },
  ]);
};
