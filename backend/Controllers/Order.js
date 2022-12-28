const Order = require("../Models/Order");

const viewAllOrders = async (req,res) =>{
    try {
        const order = await Order.find({})
        res.status(200).json({order});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createOrder = async (req , res) => {
    try{
    const order = await Order.create(req.body);
    res.status(200).json({order});

    }catch (error){
        res.status(500).json({msg:error});
    }
}

const viewOrder = async (req , res) => {
    try {
    const {id:orderId} = req.params;    
    const order = await Order.findOne({_id:orderId});

    if(!order){
        return res.status(404).json({msg:'No order with that is'});
    }

    res.status(200).json({order});

    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const updateOrder =async (req , res) => {
   try {
    const {id:orderId} = req.params;
    const order = await Order.findByIdAndUpdate({_id:orderId},req.body,{
        new:true,
        runValidators: true,
    }); 

    if(!order){
        return res.status(404).json({msg:' no task with that id' });
    }

    res.status(200).json({order});

   } catch (error) {
    res.status(500).json({msg:error});
   }
}

const cancelOrder = async(req , res) => {
    try {
    const {id:orderId } = req.params;
    const order = await Order.findOneAndRemove({_id:orderId});

    if(!order){
        return res.status(404).json({msg:' no task with that id' });
    }

    res.status(200).json({order});

    } catch (error) {
        res.status(500).json({msg:error});
    }
}


module.exports = {
    viewAllOrders,
    createOrder,
    viewOrder,
    updateOrder,
    cancelOrder 
}