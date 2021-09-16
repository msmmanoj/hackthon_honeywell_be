const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const spaceRoutes = require('./routes/space');

app.use(cors())
app.use(spaceRoutes);


mongoose.connect('mongodb://localhost:27017/honeywell', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        app.listen(4000);
    })
    .catch(err => console.log(err))