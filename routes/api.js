const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/video', function(req, res, next) {
  console.log("video!");
  res.sendStatus(200);
});

router.post('/ping', function(req, res, next) {
  res.sendStatus(200);
});


module.exports = router;
