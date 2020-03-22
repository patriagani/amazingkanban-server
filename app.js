const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

//Connect mongodb via mongoose
mongoose.connect('mongodb://localhost/kanban');

//Routes
const indexRoute = require('./routes/index')
const kanbanRoute = require('./routes/kanban')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/', indexRoute)
app.use('/kanban', kanbanRoute)

app.listen('3000', function(){
    console.log('connected to port 3000')
})