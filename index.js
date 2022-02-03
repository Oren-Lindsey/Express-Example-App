const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at https://express-example-app.s40.repl.co`)
})