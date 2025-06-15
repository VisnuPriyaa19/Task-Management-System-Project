const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,         //crypto-generated random token used for password reset(this wil be stored in the document)
  resetPasswordExpires: Date
});
 
module.exports = mongoose.model('User', UserSchema);