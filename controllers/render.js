
const axios = require('axios');

exports.dashBoard =(req,res)=>{

     // Make a get request to /api/users
     axios.get('http://localhost:3006/api/subject')
     .then(function(response){
       //  console.log(response);
         res.render('dash', { course : response.data });
     })
     .catch(err =>{
         res.send(err);
     })


    // res.render('dash', {
    
    //     name: req.user.name
    // })
}
exports.addSubject = (req,res)=>{
    res.render('admin/addSubject',{
        name:req.user.name
    })
}
// exports.updateSubject = (req,res)=>{
//     res.render('admin/updateSubject',{
//         name:req.user.name
//     })
// }
exports.updateSubject = (req, res) =>{
    axios.get('http://localhost:3006/api/subject', { params : { id : req.query.id }})
        .then(function(subjectdata){
            res.render("admin/updateSubject", { course : subjectdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
