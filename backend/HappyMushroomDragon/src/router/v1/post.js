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

// localhost:3001/api/v1/HMD/recensioni
router.get('/recensioni', validate(postValidator.Recensioni), postController.readRecensioni)

// localhost:3001/api/v1/HMD/addRecensione?datascrittura=2024/01/10&idutente=1234&contenuto=ciao&suggerimento=no suggerimento&valutazione=2
router.post('/addRecensione', validate(postValidator.AddRecensione), postController.AddRecensione)

// localhost:3001/api/v1/HMD/utente?id=1234
router.get('/utente', validate(postValidator.Utente), postController.readUtente)

// localhost:3001/api/v1/HMD/addUtente?id=1234&nome=leo&cognome=mengo&eta=2005/11/15&paese=italia
router.post('/addUtente', validate(postValidator.AddUtente), postController.AddUtente)

// localhost:3001/api/v1/HMD/account?id=asdfera?jfhasjklfhlrivty
router.get('/account', validate(postValidator.Account), postController.readAccount)

// localhost:3001/api/v1/HMD/addAccount?iduser=1234&nickname=mengo&soldi=100
router.post("/addAccount", validate(postValidator.AddAccount), postController.AddAccount)


// localhost:3001/api/v1/HMD/updatePuntiAccount?id=asdfera?jfhasjklfhlrivty&punti=-50
router.post('/updatePuntiAccount', validate(postValidator.updatePuntiAccount), postController.updatePuntiAccount)

// localhost:3001/api/v1/HMD/updateSoldiAccount?id=asdfera?jfhasjklfhlrivty&soldi=-50
router.post('/updateSoldiAccount', validate(postValidator.updateSoldiAccount), postController.updateSoldiAccount)



router.get('/personaggi', validate(postValidator.personaggi), postController.personaggi)

// localhost:3001/api/v1/HMD/personaggiPosseduti?id=asdfera?jfhasjklfhlrivty
router.get('/personaggiPosseduti', validate(postValidator.personaggiPosseduti), postController.personaggiPosseduti)

// localhost:3001/api/v1/HMD/compra?id=asdfera?jfhasjklfhlrivty&nomepersonaggio=personaggio3
router.post('/compra', validate(postValidator.compra), postController.compra)

/**
 * todo: 
 *       get nemico
 *       get sfondo
 *       get ostacolo
 *       get nemico
 *       get/post partita
 *       get/post P-S, P-P, A-P, P-O, P-N
 */

module.exports = router