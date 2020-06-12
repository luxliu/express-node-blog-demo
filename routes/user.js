var express = require('express');
const { SuccessModel, ErrorModel } = require('../model/resModel');
var router = express.Router();
const { login } = require('../controller/user');

router.post('/login', function (req, res, next) {
  const { username, password } = req.body;
  const result = login(username, password);

  result.then((data) => {
    console.log(data);
    if (data.username) {
      req.session.username = data.username;
      req.session.realname = data.realname;

      res.json(new SuccessModel());
      return;
    }
    res.json(new ErrorModel('Error when login'));
  });
});

router.get('/login-test', (req, res, next) => {
  console.log('req.session', req.session);
  if (req.session.username) {
    res.json({
      errno: 0,
      msg: 'logged in',
    });
    return;
  }
  res.json({
    errno: -1,
    msg: 'not login',
  });
});

module.exports = router;
