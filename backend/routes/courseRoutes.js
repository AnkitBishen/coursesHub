const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');    

router.get('/getAllCourses', courseController.getAllCourses);
// router.get('/getCourse/:id', courseController.getCourse);
router.post('/createCourse', courseController.createCourse);
router.put('/updateCourse/:id', courseController.updateCourse);
// router.post('/deleteCourse/:id', courseController.deleteCourse);

module.exports = router