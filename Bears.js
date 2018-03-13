const express = require("express");
const Bear = require("./Bear.js")

const BearsRouter = express.Router();

BearsRouter.get("/", function(req, res) {
  Bear.find({})
    .then(bears => {
      res.status(200).send(bears);
    })
    .catch(err => {
      res.status(500).send({
        error: "The information could not be retrieved."
      });
    });
});

module.exports = BearsRouter;
