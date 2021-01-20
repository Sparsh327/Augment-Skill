const Course = require("../models/Courses")



//create and save courses
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new course
    const {category,subject,webinarLink,description} = req.body
    const course = new Course({
        category,
        subject,
        webinarLink,
        description
    })

    // save course in the database
    course
        .save(course)
        .then(data => {
            //res.send(data)
            res.redirect('/dashboard');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        }); 
}

//retrive all courses
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Course.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found course with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving course with id " + id})
            })

    }else{
        Course.find()
            .then(course => {
                res.send(course)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving course information" })
            })
    }
}

//update courses
// exports.update = (req,res)=>{

// }


exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Course.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}









//delete courses
// exports.delete = (req,res)=>{
    
// }
exports.delete = (req, res)=>{
    const id = req.params.id;

    Course.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}