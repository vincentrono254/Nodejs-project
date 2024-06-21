const Student = require("../models/students");
const createError = require('http-errors');
const mongoose = require("mongoose");

module.exports = {
  addstudent: async (req, res, next) => {
    
    try {
      const student = new Student(req.body);
      const result = await student.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
  
    }
  },
  getStudent: async(req,res,next)=>{
const id = req.params.id;
try{
  const student = await Student.findById(id);
  if(!student){
    throw createError(404,"Student not found");
  }
  res.send(student);
}catch (error){
  console.log(error.message);
  if(error instanceof mongoose.CastError){
    next(createError(400,"Invalid id"));
    return;
  }
  next(error);
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
      if(!result){
    throw createError(404,"Student does not exist");
  }
  res.send(result);
}catch (error){
  console.log(error.message);
  if(error instanceof mongoose.CastError){
    next(createError(400,"Invalid student id"));
  }
  next(error);
}
  },
  //delete student
  deleteStudent: async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await Student.findByIdAndDelete(id);
      if(!Student){
        throw createError(404,"Student does not exist");
      }
      res.send({ message: "Student deleted ", result });
      
    } catch (error) {
      console.log(error.message);
      if(error instanceof mongoose.CastError){
        next(createError(400,"Invalid student id"));
        return;
      }
      
    }
  },
};
