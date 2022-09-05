require('dotenv').config();
const express = require('express');
const app = express();

app.use('/api/v1', require('./routes/course.routes'));
app.use('/api/v1', require('./routes/user.routes'));

module.exports = app;
