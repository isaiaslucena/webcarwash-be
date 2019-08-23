var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
      // res.render('index', { title: 'Express' });
   }
});

module.exports = router;