const ApiModel = require('../models/ApiModel');


exports.getAPIDetails = (req, res) => {
    ApiModel.find().then((apiDetails) => {
        res.json({
            status: "true",
            data: apiDetails
        })
    }).catch(err => {
        res.json({
            status: "false",
            data: "API Failed"
        })
    })
}

exports.getAPIDetailsBySearch = (req, res) => {
    const category = req.query.category || null;
    const name = req.query.name || null;
    ApiModel.find({
        $or: [
            {'category': category},
            {'name': new RegExp(name, 'i')},
        ]
    }).then((apiDetails) => {
        return res.json({
            status: "true",
            data: apiDetails
        })
    }).catch(err => {
        return res.json({
            status: "false",
            data: "API Failed"
        })
    })
}
