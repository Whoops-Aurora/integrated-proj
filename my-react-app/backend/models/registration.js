const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    } ,
    fullName: {
        type:String,
        required:true,
    },
    emailAddress: {
        type:String,
        required:true,
    },
    usn:{
        type:String,
        required:true,
    },
    contactNumber : {
        type:String,
        required:true,
    }
  });

module.exports = mongoose.model('Registration', registrationSchema);
