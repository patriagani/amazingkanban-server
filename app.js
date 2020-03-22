const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

//Connect mongodb via mongoose
mongoose.connect('mongodb://localhost/kanban');

//Routes
const indexRoute = require('./routes/index')
const kanbanRoute = require('./routes/kanban')

const app = express()
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({ origin: true, credentials: true }))

io.on('connection', function (socket) {
    socket.on('kanban', function (data) {
      io.emit('update-kanban');
    });
  });

app.use('/', indexRoute)
app.use('/kanban', kanbanRoute)

server.listen('3000', function(){
    console.log('connected to port 3000')
})