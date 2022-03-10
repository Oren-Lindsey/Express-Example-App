//express example app
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
})

app.get('/api', (req, res) => {
  res.send({"hello":"world"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`)
})
