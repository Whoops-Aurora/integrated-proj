require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user.model');

// Use your MongoDB connection string
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', async () => {
  console.log("MongoDB database connection established successfully");

  const newUser = new User({
    username: 'admin',
    password: 'password' // In real applications, never store passwords in plain text. Always hash and salt the passwords.
  });

  try {
    await newUser.save();
    console.log('User saved successfully');
  } catch (err) {
    console.error(err);
  }
});