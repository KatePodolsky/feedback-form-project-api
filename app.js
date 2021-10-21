const express = require('express')
const logger = require('npm i morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'combined'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/feedback', indexRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app