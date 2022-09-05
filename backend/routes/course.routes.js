const express = require('express');
const { getAllCourses } = require('../controllers/course.controller');

const router = express.Router();

router.route('/courses').get(getAllCourses);  

module.exports = router;
