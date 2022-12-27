const viewAllOrders = (req,res) =>{
    res.send('All orders');
}

const createOrder = (req , res) => {
    res.send('create order');
}

const viewOrder = (req , res) => {
    res.send('View an order');
}

const updateOrder = (req , res) => {
    res.send('update order');
}

const cancelOrder = (req , res) => {
    res.send('cancel order');
}


module.exports = {
    viewAllOrders,
    createOrder,
    viewOrder,
    updateOrder,
    cancelOrder 
}