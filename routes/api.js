const express = require("express");
const routes = express.Router();

//get a list of student from database
routes.get("/students", (req, res) => {
  res.send({ type: "Get Request" });
});

//add student to db
routes.post("/students", (req, res) => {
  res.send({ type: "post Request" });
});
//update strudents in the DB
routes.put("/students/:id", (req, res) => {
  res.send({ type: "Update Request" });
});

//delete a student from the DB

routes.delete("/students/:id", (req, res) => {
  res.send({ type: "Delete Request" });
});

module.exports = routes;
