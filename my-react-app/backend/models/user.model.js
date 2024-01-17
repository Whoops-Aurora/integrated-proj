const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // In real applications, never store passwords in plain text. Always hash and salt the passwords.
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;