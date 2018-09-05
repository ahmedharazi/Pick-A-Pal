var db = require("../models");

module.exports = function(app) {
  //Get all breeds
  app.get("/api/breedFinder", function(req, res) {
    db.breedFinder.findAll({}).then(function(dbBreedfinder) {
      res.json(dbBreedfinder);
    });
  });
   
  // Create a new example
  app.post("/api/breedFinder", function(req, res) {
    db.breedFinder.create(req.body).then(function(dbPickapal) {
      res.json(dbBreedfinder);
    });
  });

  // Delete an example by id
  app.delete("/api/breedFinder/:id", function(req, res) {
    db.breedFinder.destroy({ where: { id: req.params.id } }).then(function(
      dbBreedfinder
    ) {
      res.json(dbBreedfinder);
    });
  });
};
