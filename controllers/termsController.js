var express = require('express');
var router = express.Router();

var term = require('../models/term.js');


router.get('/', term.getAll, renderIndex );
// router.get('/:id',);
function renderIndex(req, res){
    var mustacheVariables = 
        res.locals.term;
     
     res.render('./terms/index', mustacheVariables);
   }
   


module.exports = router;