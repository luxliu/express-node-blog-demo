var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
  res.json({
    errno: 0,
    data: [],
  });
});

router.get('/detail', function (req, res, next) {
  res.json({
    errno: 0,
    data: 'OK',
  });
});

module.exports = router;
