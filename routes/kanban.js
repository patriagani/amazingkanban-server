const express = require('express')
const router = express.Router()
const KanbanController = require('../controllers/KanbanController')

router.get('/', KanbanController.getAllKanban)

router.post('/', KanbanController.createKanban)

router.get('/:kanbanId', KanbanController.getKanban)

router.patch('/:kanbanId', KanbanController.updateKanban)

router.delete('/:kanbanId', KanbanController.deleteKanban)

module.exports = router