const Kanban = require('../models/Kanban')

class KanbanController {

    static getAllKanban(req, res) {
        Kanban.find()
            .then(function(kanban) {
                res.status(200).json(kanban)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static createKanban(req, res) {
        let obj = {
            title: req.body.title,
            description: req.body.description,
            point: req.body.point,
            assignedto: req.body.assignedto
        }

        Kanban.create(obj)
            .then(function(kanban) {
                res.status(200).json(kanban)
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static getKanban(req, res) {
        Kanban.findById(req.params.kanbanId)
            .then(function(kanban) {
                res.status(200).json(kanban)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static updateKanban(req, res) {
        Kanban.findOneAndUpdate({_id: req.params.kanbanId}, req.body, {new: true})
          .then(function(kanban) {
            res.status(200).json(kanban)
          })
          .catch(function(error) {
            res.status(500).json({
              message: "Internal Server Error",
              error: error
            })
          })
    }

    static deleteKanban(req, res) {
        Kanban.deleteOne({_id: req.params.kanbanId})
            .then(function(status) {
                if (status.deletedCount == 0) {
                    throw new Error("Cannot find kanban id")
                }
                res.status(200).json(status)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

}

module.exports = KanbanController