const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const authenticate = require("../auth/authenticate-middleware");
const authRouter = require("../auth/auth-router");
const studentRouter = require("../students/studentRouter");
const projectRouter = require("../projects/projectRouter");
const reminderRouter = require("../reminders/reminderRouter");

const server = express();

const sessionConfig = {
  name: "monster",
  secret: process.env.COOKIE_SECRET || "keep it safe!",
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
    secure: process.env.SECURE_COOKIE || false, // only set cookies over https. Server will not send back a cookie over http.
  },
  httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIE || false, //經過client同意是否儲存cookie
};

server.use(session(sessionConfig));

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api", authRouter);
server.use("/api/students", authenticate, studentRouter);
server.use("/api/projects", authenticate, projectRouter);
server.use("/api/projects/reminders", authenticate, reminderRouter);

module.exports = server;
