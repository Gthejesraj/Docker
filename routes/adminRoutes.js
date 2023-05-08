//import admin controller  and pass it to the router 
const express = require('express')
const {getRooms,getBookings,getPayments,getUser,updateRoom,createRoom,getUsers} = require('../controllers/adminController')

const router = express.Router()  

router.get('/users',getUsers)
router.get('/user/:id',getUser)
router.get('/rooms',getRooms)   
router.get('/bookings',getBookings)
router.get('/payments',getPayments)
router.put('/rooms',updateRoom)
router.post('/createRoom',createRoom)
module.exports = router