require('dotenv').config()
const myApp = require('./app')

const PORT = process.env.PORT || 2000

require('http').createServer(myApp).listen(PORT, () => {
    console.log(`Server is Running on this port ${PORT}`);
})