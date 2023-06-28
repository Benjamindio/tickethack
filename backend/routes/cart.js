var express = require('express');
var router = express.Router()
const Cart = require('../models/cart')



router.post('/newTrip', (req,res) =>{
    Cart.findOne({trip:req.body.id})
    .populate('trip')
    .then(data => {
        const newTrip = new Cart({
            trip:[req.body.id],
            paid: false,
        })
        newTrip.save().then(() =>
        console.log(`New Trip saved !`))
        res.json({trip :data})
    })
})

router.delete('/deleteATrip', (req,res) => {
    Cart.findOne({_id:req.body.id})
    .then(data => {
            console.log(data)
        })
    })

router.delete('/booked', (req,res) => {
    Cart.find({paid:req.body.paid})
    .then(data => {
        console.log(data)
    })
})




module.exports = router;