const express = require('express')
const app = express()
const port = 5000
//curl -X POST http://127.0.0.1:5000/ run on cmd
app.post('/', (req, res) => {
  res.send('Hello Aman Welcome in Post method!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})