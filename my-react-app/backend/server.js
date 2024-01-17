const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const data1Router = require('./routes/data1');

// Import User model
const User = require('./models/user.model');

require('dotenv').config();

const app = express();
const port =5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/clubs', data1Router);

// Add login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  // If the username and password are valid, return success
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});