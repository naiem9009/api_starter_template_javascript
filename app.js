const express = require('express')
const app = express()

const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const auth_route = require('./routes/auth.route')



app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

// cors config
app.use(cors())

// development purpos
app.use(morgan('dev'))



// routes config
app.use('/auth', auth_route)



app.get('/', (req, res) => {
    res.status(200).json({"status": "okay"})
})


module.exports = app