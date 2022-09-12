const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const regisRoute = require('./routes/regisRoute')
 const checkoutRoute = require('./routes/checkoutRoute')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


app.use('', regisRoute)
app.use('', checkoutRoute)

module.exports = app;
