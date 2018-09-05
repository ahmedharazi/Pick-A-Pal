var db = require("../models");

module.exports = function (app) {
  // Load landing page
  app.get("/", function (req, res) {
    db.breedFinder.findAll({}).then(function (dbBreedfinder) {
      res.render("landing", {
        msg: "Welcome!",
        breedFinder: dbBreedfinder
      });
    });
  });
  // Load survey page on click
  app.get("/survey", function (req, res) {
    db.breedFinder.findAll({}).then(function (dbBreedfinder) {
      res.render("survey", {
        breedFinder: dbBreedfinder
      });
    });
  });

  // Load survey page and pass in an example by id
  app.get("/survey/:id", function(req, res) {
    db.breedFinder.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(
      dbBreedfinder) {
      res.render("survey", {
        breedFinder: dbBreedfinder
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};