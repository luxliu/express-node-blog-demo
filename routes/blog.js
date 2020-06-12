var express = require('express');
var router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.get('/list', function (req, res, next) {
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';
  const result = getList(author, keyword);
  result.then((listData) => {
    res.json(new SuccessModel(listData));
  });
});

router.get('/detail', function (req, res, next) {
  res.json({
    errno: 0,
    data: 'OK',
  });
});

module.exports = router;
