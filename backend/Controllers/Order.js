const Order = require("../Models/Order");
const wrap = require('handle-try-catch');


const viewAllOrders = wrap(async (req,res) =>{
    
        const order = await Order.find({})
        res.status(200).json({order}); 
})

const createOrder = wrap(async (req , res) => {
    const order = await Order.create(req.body);
    res.status(200).json({order});

})

const viewOrder = wrap(async (req , res) => {
  
    const {id:orderId} = req.params;    
    const order = await Order.findOne({_id:orderId});

    if(!order){
        return res.status(404).json({msg:'No order with that is'});
    }

    res.status(200).json({order});
})

const updateOrder =wrap(async (req , res) => {

    const {id:orderId} = req.params;
    const order = await Order.findByIdAndUpdate({_id:orderId},req.body,{
        new:true,
        runValidators: true,
    }); 

    if(!order){
        return res.status(404).json({msg:' no task with that id' });
    }

    res.status(200).json({order});
})

const cancelOrder = wrap(async(req , res) => {

    const {id:orderId } = req.params;
    const order = await Order.findOneAndRemove({_id:orderId});

    if(!order){
        return res.status(404).json({msg:' no task with that id' });
    }

    res.status(200).json({order});

})


module.exports = {
    viewAllOrders,
    createOrder,
    viewOrder,
    updateOrder,
    cancelOrder 
}