const express = require('express')
const app = express()
const cors = require('cors')
const mainRouter = require('./router/router.js')

app.listen(8000)
app.use(express.json());
app.use(cors())

app.use(['/'], mainRouter)