var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CavsSchema = new Schema({
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

var blogSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    posted : {
        type : Date,
        default: Date.now
    }
}, {collection : 'post'});


var blogModel = mongoose.model('blog',blogSchema);


var cavsModel = mongoose.model('Cavs',CavsSchema);


module.exports =  {
    cavsModel : cavsModel,
    blogModel : blogModel
};
