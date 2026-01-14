var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(80,  () => {
  console.log('Example app listening on port 80! Express server started successfully')
})