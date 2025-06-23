const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = connectDB;