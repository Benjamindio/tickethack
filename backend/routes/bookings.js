var express = require('express');
var router = express.Router()


router.post('/newbooking', (req,res) =>{
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





module.exports = router;