const express = require('express')
const router = express.Router()

const {viewAllOrders,createOrder,viewOrder,updateOrder,cancelOrder} = require('../Controllers/Order')

router.route('/').get(viewAllOrders).post(createOrder)
router.route('/:id').get(viewOrder).patch(updateOrder).delete(cancelOrder)

module.exports = router