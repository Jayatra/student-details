const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type : String,
        require:true
    },
   
    contact:{
        type: Number,
        require:true,
        unique: true
    },
    subject:{
        type : String,
        require:true
    },
    classno : String,
    society:{
        type: String,
        require:true
    },
    year:Number
})

const Userdb = mongoose.model('studentdb',schema)


module.exports = Userdb