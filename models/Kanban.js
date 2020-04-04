const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kanbanSchema = new Schema({
    title : { type: String, required: true},
    description: { type: String, required: true },
    point: { type: Number, required: true, default: 0},
    assignedto: { type: String, required: true},
    status: { type: String, required: true, default: 'Back-Log'}
})

const Kanban = mongoose.model('Kanban', kanbanSchema)

module.exports = Kanban