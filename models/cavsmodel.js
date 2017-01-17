var mongoose = require('mongoose');

var CavsSchema = mongoose.Schema({
   fname: {
      type: String,
       required: true
   } ,
    lname : {
       type: String,
        required: true
    },
    age : {
       type: Number,
        required: true
    },
    height : {
       type: Number,
        required : true
    },
    position: {
        type: String,
        required: true
    },
    college: {
       type: String
    },
    ppg : {
       type: Number,
        required: true
    },
    salary : {
       type : Number,
        required: true
    }
}, {collection: 'cavaliers'});

var cavsModel = mongoose.model('Cavs',CavsSchema );

module.exports = cavsModel;
