const router = require("express").Router();
const db = require("./studentModel");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "keepitsecret,keepitsafe!";
  jwt.verify(token, secret, (error, decodedToken) => {
    req.jwt = decodedToken;
  });
  db.findBy(req.jwt.subject)
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/:studentId", (req, res) => {
  db.findById(req.params.studentId)
    .then((student) => {
      res.status(200).json(student).first();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.add(req.body)
    .then((student) => {
      res.status(201).json({ message: student });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:studentId", (req, res) => {
  db.update(req.params.studentId, req.body)
    .then((student) => {
      res.status(200).json("update successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:studentId", (req, res) => {
  db.remove(req.params.studentId)
    .then((student) => {
      res.status(200).json("remove successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
