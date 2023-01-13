const mongoose = require('mongoose');
const{Schema}=mongoose;

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[50,'name can not be more than 50 charectors']
    },

    email:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[50,'name can not be more than 50 charectors']
    },

    position:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[50,'name can not be more than 50 charectors']
    },

    password:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[50,'name can not be more than 50 charectors']
    }



});

module.exports = mongoose.model('User',userSchema);