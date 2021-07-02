const express = require('express')
const router = express.Router()
const controller = require('../controlers/controller.js')

router.get('/getData', controller.getData)

module.exports = router