const Course = require("../models/Courses")
function subjectController(){
    return {
          postSubject(req,res){
              const {category,subject,webinarLink,description} = req.body
              const course = new Course({
                category,
                subject,
                webinarLink,
                description
              })
              course.save().then((course) => {
                // Login
                return res.redirect('/dashboard')
             })
              
          },
        }
    }

module.exports = subjectController