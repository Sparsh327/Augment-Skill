const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const admin = require('../config/middleware')
const adminController = require('../controllers/adminController')
const services = require('../controllers/render')

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', admin,services.dashBoard);
router.get('/addSubject', admin,services.addSubject );
router.get('/updateSubject', admin,services.updateSubject );


//API
router.post('/api/subject', adminController.create);
router.get('/api/subject', adminController.find);
router.put('/api/subject/:id', adminController.update);
router.delete('/api/subject/:id', adminController.delete);



module.exports = router;