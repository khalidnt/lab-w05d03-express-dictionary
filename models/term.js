var db = require('../db/config');
var term = {};

term.getAll = function(req, res){
    db.manyOrNone("SELECT * FROM express_terms;")
    .then(function(result){
        res.locals.term = result
    next();
    })
    .catch(function(error){ 
        console.log(error);
        next(); 
      })
}  


module.exports = term;