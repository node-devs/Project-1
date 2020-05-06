const express = require('express')
const routes = require('./routes')
const { PORT, DB_URL, OPTIONS } = require('./config')
const mongoose = require('mongoose')
const logger = require('./middleware/logger')
const app = express()
// database connection
mongoose.connect(DB_URL, OPTIONS, (err) => {
  if (err) throw new Error(err)
  console.log('database connected!')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// logger middleware would be here
app.use(logger)

app.use(routes)

// error handling middleware would be here

app.listen(PORT)
console.log('app is listening on port ' + PORT)
