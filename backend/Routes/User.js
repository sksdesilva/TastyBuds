const express = require('express')
const router = express.Router()

const {userRegistration,login,updateUser} = require('../Controllers/User')

router.route('/').get(login).post(userRegistration)
router.route('/:email').patch(updateUser)


module.exports = router