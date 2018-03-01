var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var http = require('http')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
// app.use(multer({
//     dest: 'uploads/',
//     rename: function (fieldname, filename) {
//         return filename
//     }
// }).single('img'))

// load schema
require('./imgmodel')

// load route setting
app.use('/', require('./route'))
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

var server = http.createServer(app)
server.listen(3000)
server.on('listening', function () {
    console.log('Express server has started on port 3000')
})
server.on('error', function (error){
    console.error(error)
})

// connect to mongo
mongoose.connect('mongodb://127.0.0.1/testing_storeImg')
mongoose.set('debug', true)
