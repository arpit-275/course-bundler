const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const app = require('./app');
const PORT = process.env.PORT || 5000;

console.log('Mode:', process.env.NODE_ENV);
connectDB();

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});
