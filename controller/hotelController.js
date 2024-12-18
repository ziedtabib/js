var express = require('express')
var router = express.Router()
const { listhotel, createhotel, updatehotel, deletehotel } = require('../services/hotelService')
    //var validate = require('../middleware/validation')


router.get('/list', listhotel)

router.post('/create', createhotel)
router.put('/update/:id', updatehotel)
router.delete('/delete/:id', deletehotel)





module.exports = router