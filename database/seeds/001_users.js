exports.seed = function (knex, Promise) {
  return knex("users").insert([
    { username: "Sam", password: "123", email: "sam@gmail.com" },
    { username: "Ken", password: "123", email: "ken@gmail.com" },
    { username: "Wendy", password: "123", email: "wendy@gmail.com" },
  ]);
};
