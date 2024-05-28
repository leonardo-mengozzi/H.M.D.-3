const express = require('express')
const router = express.Router()
const httpStatus = require('http-status')

const validate = require('../../middleware/validator')
const postValidator = require('../../validator/post')
const postController = require('../../controller/user')


// Example of middleware
router.use((req, res, next) => {
    console.log(`Route called: ${req.method} - ${req.originalUrl}`)
    next()
})

router.get('/commenti', validate(postValidator.recensione), postController.recensione)

module.exports = router