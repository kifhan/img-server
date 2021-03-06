var mongoose = require('mongoose')
var Schema = mongoose.Schema

// example schema
var imgSchema = new Schema({
    name: { type: String, default: 'untitled.jpg' },
    img: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('image', imgSchema)
