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

router.get('/commenti', validate(postValidator.Recensione), postController.readRecensione)

router.get('/allcommenti', validate(postValidator.AllRecensione), postController.readAllRecensione)

// localhost:3001/api/v1/HMD/addUtente?nome=leo&cognome=mengo&eta=18&paese=italia
router.post('/addUtente', validate(postValidator.AddUtente), postController.AddUtente)

module.exports = router