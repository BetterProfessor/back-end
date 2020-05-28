const server = require("./api/server.js");
require("dotenv").config();
const emailSender = require("./emailSender");

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
  setInterval(emailSender.emailSender, 1500);
});
