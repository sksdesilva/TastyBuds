const mongoose = require('mongoose')
const {Schema} = mongoose;

const OrderSchema = new Schema({
    cusName:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 charectors']
    },
    foodName:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 charectors']
    },
    quntity:{
        type:Number,
        required:[true,'must provide name'],
        trim:true,
    },
    orderTime:{
        type:Number,
        required:[true,'must provide name'],
        trim:true,
    }


});

module.exports = mongoose.model('Order',OrderSchema)