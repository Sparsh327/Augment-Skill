const mongoose = require('mongoose');

//------------  Schema ------------//
const CoursesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  webinarLink: {
    type: String,
    default: false
  },
  
  //image
  img:{
      
      type: String
  },
  layout:{
    text:Array
  }
 

}, { timestamps: true });

const Course = mongoose.model('Course', CoursesSchema);

module.exports = Course;