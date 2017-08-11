'use strict'
var crypto = require('crypto');

module.exports = function() {
    return {
        singlesList: [],
        save(single) {
            single.id = crypto.randomBytes(20).toString('hex')
            this.singlesList.push(single)
            return 1
        },
        find(id) {
            if(id) {
                return this.singlesList.find(e => {
                    return e.id === id
                })
            } else {
                return this.singlesList
            }
        },
        remove(id) {
            var found = 0
            this.singlesList = this.singlesList.filter(e => {
                if(e.id === id) {
                    found = 1
                } else {
                    return e.id !== id
                }
            })
            return found
        },
        update(id, single) {
            var singleIndex = this.singlesList.findIndex(e => {
                return e.id === id
            })
            if(singleIndex !== -1) {
                this.singlesList[singleIndex].title = single.title
                this.singlesList[singleIndex].artist = single.artist
                this.singlesList[singleIndex].year = single.year
                return 1
            } else {
                return 0
            }
        }
    }
}