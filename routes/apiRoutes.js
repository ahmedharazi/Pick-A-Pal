var db = require("../models");

module.exports = function(app) {
  //Get all Pickapal
  app.get("/api/pickapal", function(req, res) {
    db.Pickapal.findAll({}).then(function(dbPickapal) {
      res.json(dbPickapal);
    });
  });


  // app.get("http://api.petfinder.com/pet.find?format=json&key=4b4d53d4377d39448594a68f7fb04a22&location=32826", function(req, res) {
  //   // .done(function(petApiData) { alert('Data retrieved!'; })
  //   // .error(function(err) { alert('Error retrieving data!'); 
  //   db.Pickapal.findAll({}).then(function(dbPickapal) {
  //     res.json(dbPickapal);
  //   });
  // });
   
  // Create a new example
  app.post("/api/pickapal", function(req, res) {
    db.Pickapal.create(req.body).then(function(dbPickapal) {
      res.json(dbPickapal);
    });
  });

  // Delete an example by id
  app.delete("/api/pickapal/:id", function(req, res) {
    db.Pickapal.destroy({ where: { id: req.params.id } }).then(function(
      dbPickapal
    ) {
      res.json(dbPickapal);
    });
  });
};
