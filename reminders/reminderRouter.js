const router = require("express").Router({ mergeParams: true });
const db = require("./reminderModel");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "keepitsecret,keepitsafe!";
  jwt.verify(token, secret, (error, decodedToken) => {
    req.jwt = decodedToken;
  });
  db.findBy(req.jwt.subject)
    .then((reminder) => {
      res.status(200).json(reminder);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.add(req.body)
    .then((reminder) => {
      res.status(201).json(reminder);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:reminderId", (req, res) => {
  db.update(req.params.reminderId, req.body)
    .then((reminder) => {
      res.status(200).json("update successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:reminderId", (req, res) => {
  db.remove(req.params.reminderId)
    .then((reminder) => {
      res.status(200).json("remove successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
