require('dotenv').config();
const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');

app.use('/api/v1', require('./routes/course.routes'));
app.use('/api/v1', require('./routes/user.routes'));
app.use(errorHandler);

module.exports = app;
