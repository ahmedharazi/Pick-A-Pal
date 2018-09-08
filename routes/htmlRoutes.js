var db = require("../models");

module.exports = function (app) {
  // Load landing page
  app.get("/", function (req, res) {
    db.breedFinder.findAll({}).then(function (dbPickapal) {
      res.render("landing", {
        msg: "Welcome!",
        breedFinder: dbPickapal
      });
    });
  });
  // Load add a pet to your home page on click
  app.get("/survey", function (req, res) {
    db.breedFinder.findAll({}).then(function (dbPickapal) {
      res.render("survey", {
        breedFinder: dbPickapal
      });
    });
  });
// Load playdate survey page on click
  app.get("/playdate", function (req, res) {
    db.playdate.findAll({}).then(function (dbPickapal) {
      res.render("playdate", {
        playdate: dbPickapal
      });
    });
  });

      // Load example page and pass in an example by id
  app.get("/pickapal/:id", function (req, res) {
    db.breedFinder.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbPickapal) {
      res.render("survey", {
        breedFinder: dbPickapal
      });
    });
  });
  // Load playdate with id
  app.get("/pickapal/:id", function (req, res) {
    db.playdate.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbPickapal) {
      res.render("survey", {
        playdate: dbPickapal
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};