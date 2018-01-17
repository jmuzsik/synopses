const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const db = require('./server/mongoose.js');

const api = require('./server/routes/api')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'src')))

app.use('/api', api)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => console.log('Chilling on port ', + port))
