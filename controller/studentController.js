const Student = require("../models/students");
module.exports = {
  addstudent: async (req, res, next) => {
    //console.log(req.body)
    //res.send(req.body)
    try {
      const student = new Student(req.body);
      const result = await student.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllStudents: (req, res, next) => {
    Student.find({}).then((student) => {
      res.send(student);
    });
  },
  //update students
  updateStudent: async (req, res, next) => {
    try {
      const id = req.params.id;
      const update = req.body;
      const options = { new: true };
      const result = await Student.findByIdAndUpdate(id, update, options);

      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },
  //delete student
  deleteStudent: async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await Student.findByIdAndDelete(id);
      res.send({ message: "Student deleted ", result });
      //  res.status(204).send(`Student with id ${id} has been deleted`);
    } catch (error) {
      console.log(error.message);
      //  res.status(500).send(`Error deleting student: ${error.message}`);
    }
  },
};
