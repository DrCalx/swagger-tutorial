'use strict'

module.exports = {
    get: get
}

function get(req, res) {
    if (req.swagger.params.id) {
        var id = req.swagger.params.id.value
        res.json(`Returning single with id: ${id}`)
    }
    else {
        res.json('Returning all singles')
    }
}