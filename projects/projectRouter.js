const router = require("express").Router();
const db = require("./projectModel");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "keepitsecret,keepitsafe!";
  jwt.verify(token, secret, (error, decodedToken) => {
    req.jwt = decodedToken;
  });
  db.findBy(req.jwt.username)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/:projectId", (req, res) => {
  db.findById(req.params.projectId)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.add(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:projectId", (req, res) => {
  db.update(req.params.projectId, req.body)
    .then((project) => {
      res.status(200).json("update successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:projectId", (req, res) => {
  db.remove(req.params.projectId)
    .then((project) => {
      res.status(200).json("remove successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
