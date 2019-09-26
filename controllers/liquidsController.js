// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports =  {
getCapitals:(req,res)=>{

    var toCapitals
    var converted
  if(req.params.capitals!=null){
    toCapitals=req.params.capitals
    converted =toCapitals.toUpperCase()
  }else{
    res.status(422).json("value is null or cannot be converted to capitals")
  }
    res.status(200).json(converted)
}

/*
    db.Liquids.findAll({}).then(function(dbLiquids) {
        // We have access to the Liquidss as an argument inside of the callback function
        res.status(200).json(dbLiquids);
      }).catch(function(err){
        res.status(422).json(err.message);
    })

}
*/,
  
    addLiquid:(req,res)=>{
        db.Liquids.create({
            text: req.body.text,
            complete: req.body.complete
          }).then(function(dbLiquids) {
            // We have access to the new Liquids as an argument inside of the callback function
            res.json(dbLiquids);
          })
            .catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
              res.json(err);
            });
    },
    deleteLiquids:(req,res)=>{
        db.Liquids.destroy({
            where: {
              id: req.params.id
            }
          }).then(function(dbLiquids) {
            res.json(dbLiquids);
          });
    },
 

 editLiquids:(req,res)=>{
    db.Liquids.update({
        marca: req.body.marca,
        nombre: req.body.nombre
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(dbLiquids) {
        res.json(dbLiquids);
      })
        .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
          res.json(err);
        });
 }
};
