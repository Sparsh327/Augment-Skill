const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const admin = require('../config/middleware')
const subjectController = require('../controllers/subjectcontroller')

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', admin, (req, res) => res.render('dash', {
    name: req.user.name
}));
router.get('/addSubject', admin, (req, res) => res.render('admin/addSubject', {
    name: req.user.name
}));
router.post('/addSubject', admin,subjectController().postSubject);

module.exports = router;