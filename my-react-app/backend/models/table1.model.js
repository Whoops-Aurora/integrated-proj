const {mongoose} = require('mongoose');
const Schema = mongoose.Schema

//creating schema
const tableShema = new Schema({
    title: { type: String, required: true },
    description: {type: String, required: true},
    image:{type:String,required:true},
},
{
    timestamp: true
})

//creating model
const Table =  mongoose.model('Table',tableShema);

module.exports = Table;