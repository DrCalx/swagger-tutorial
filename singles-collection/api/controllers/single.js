var db = require('../../db/memory')();

module.exports = {
    getAll: (req, res, next) => {
        res.json({ singles: db.find()})
    },
    save: (req, res, next) => {
        res.json({success: db.save(req.body), description: "Single added to the list!"})
    },
    getOne: (req, res, next) => {
        var id = req.swagger.params.id.value
        var single = db.find(id)
        if(single) {
            res.json(single)
        } else {
            res.status(204).send()
        }
    },
    update: (req, res, next) => {
        var id = req.swagger.params.id.value
        var single = req.body
        if(db.update(id, single)){
            res.json({success: 1, description: "Single updated!"})
        } else {
            res.status(204).send()
        }
    },
    delSingle: (req, res, next) => {
        var id = req.swagger.params.id.value
        if(db.remove(id)){
            res.json({success: 1, description: "Single deleted!"})
        } else {
            res.status(204).send()
        }
    }
}