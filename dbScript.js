const mongoose = require('mongoose');
const ApiModel = require('./models/ApiModel');

const data = require('./data/APIDetails.json');

mongoose.connect('mongodb://localhost:27017/honeywell', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', async function () {
    console.log("Connection Successful!");
    await ApiModel.deleteMany({});
    ApiModel.insertMany(data).then(() => {
        console.log("data added successfully");
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        db.close();
    });
})

