const path = require('path');

const express = require('express');

 

const router = express.Router();

 

//  /echo-server => GET
router.get('/echo-server', (req, res, next) => {
  res.render('echo-html', { 
  });
  
});

// /echo-server => POST
router.post('/echo-server', (req, res, next) => {
   res.render('echo-html',{
    reply  : req.body.reply ,
  })
});

exports.routes = router;
 
