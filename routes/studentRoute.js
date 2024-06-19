const express = require("express");
const routes = express.Router();

const Student = require("../models/students");
const studentController = require("../controller/studentController");

//get a list of student from database
routes.get("/students", (req, res) => {
  res.send({ type: "Get Request" });
});

//add student to db
routes.post("/students", (req, res) => {
  res.send({ type: "post Request" });
});
//update students in the DB
routes.put("/students/:id", (req, res) => {
  res.send({ type: "Update Request" });
});
//patch update
routes.patch("/updateStudent/:id", studentController.updateStudent);
//get all students
routes.get("/getAllStudents", studentController.getAllStudents);

routes.post("/addstudent", studentController.addstudent);
//delete a student from the DB

routes.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = routes;
