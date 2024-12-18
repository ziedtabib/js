var hotel = require('../model/Hotel')




async function listhotel(req, res, next) {
    // res.end('hotel List')
    await hotel.find().then((data, err) => {
        if (err) {
            res.status(503).json(err)
        } else {
            res.status(200).json(data)
        }
    })
}

const createhotel = (req, res, next) => {
    const { name, fabricationDate, nbrRoom } = req.body


    new hotel({
        name: name,
        fabricationDate: new Date(),
        nbrRoom: nbrRoom
    }).save().then((err, data) => {
        if (err) {
            console.log("error create hotel : " + err);
        }
        console.log(data)
    })

    res.json('hotel added ! name : ' + name + ' fabricationDate : ' + fabricationDate + 'nbrRoom' + nbrRoom)
}

async function updatehotel(req, res, next) {
    hotel.findByIdAndUpdate(req.params.id, req.body)
        .then((data, err) => {
            if (err) {
                res.status(500).json(err)
            }
            res.status(200).json(data)
        })
}


async function deletehotel(req, res, next) {
    await hotel.findByIdAndDelete(req.params.id).then((data, err) => {
        if (err) {
            res.status(500).json(err)
        }
        res.status(200).json("aaaaaaaaaa")

    })
}

async function searchhotels(req, res, next) {
    await Hotels.find({ nbr_room: { $gte: 10, $lte: 100 } })
        .then((hotels) => {
            res.status(200).json(hotels);

        })
        .catch((err) => {
            res.status(500).json(err)

        });
}

module.exports = { createhotel, listhotel, updatehotel, deletehotel }