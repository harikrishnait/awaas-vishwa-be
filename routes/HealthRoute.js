const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("Awaas vishwa backend is healthy");
});

module.exports = router;
