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

// localhost:3001/api/v1/HMD/addUtente?id=1234&nome=leo&cognome=mengo&eta=2005/11/15&paese=italia
router.post('/addUtente', validate(postValidator.AddUtente), postController.AddUtente)

router.post("/addAccount", validate(postValidator.AddAccount), postController.AddAccount)

// localhost:3001/api/v1/HMD/utente?id=1234
router.get('/utente', validate(postValidator.Utente), postController.readUtente)

module.exports = router