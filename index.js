var express = require('express')
var app = express()
var dir = 'public'

app.use(express.static(dir))

app.listen(3000, function() {
    console.log('Express server running on port 3000')
})
