const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const APIModel = new Schema({
    "api_id": Number,
    "name": String,
    "type":String,
    "category": String,
    "description":String,
    "response": Object,
    "parameters":Object,
    "api_call":String,
    "subscriptions":Object,
})

module.exports = mongoose.model('APIModel', APIModel);