const express = require('express')
const mongoose = require('mongoose')
const { json } = require('express')
const cors = require('cors')

const routes = require('./routes/users.routes')

var app = express();

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/weather-pp-db')
.then(console.log('Successfully connected to db'))
.catch(err => console.error(err))

app.use(json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Welcome to Weather forecast backend')
})

app.use('/api/',routes)

app.listen(PORT, (req,res) => {
    console.log(`app running on http://localhost:${PORT}`);
})
