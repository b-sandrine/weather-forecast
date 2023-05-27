const express = require('express')
const mongoose = require('mongoose')

var app = express();

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/vehicleTrackingMS')
.then(console.log('Successfully connected to db'))
.catch(err => console.error(err))

app.listen(PORT, (req,res) => {
    console.log(`app running on http://localhost:${PORT}`);
})
