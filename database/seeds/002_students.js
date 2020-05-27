exports.seed = function (knex, Promise) {
  return knex("students").insert([
    {
      my_username: "Sam",
      studentName: "Helen Lu",
      studentEmail: "hellenlu@gmail.com",
    },
    {
      my_username: "Sam",
      studentName: "Penny Wen",
      studentEmail: "pennywen@gmail.com",
    },
    {
      my_username: "Ken",
      studentName: "Judy Qua",
      studentEmail: "judyqua@gmail.com",
    },
    {
      my_username: "Wendy",
      studentName: "Yee Lin",
      studentEmail: "yeelin@gmail.com",
    },
    // { my_username: , studentName: "Kenny Ho", studentEmail: "kennyho@gmail.com" },
    // { my_username: , studentName: "May Ken", studentEmail: "mayken@gmail.com" },
    // { my_username: , studentName: "Ana Doo", studentEmail: "anadoo@gmail.com" },
    // { my_username: , studentName: "Tina Gin", studentEmail: "tinagin@gmail.com" },
  ]);
};
