const Joi = require('joi')

const Recensione = {
    query:Joi.object().keys({
        nomeColonna: Joi.string()
    })

}

module.exports = {
    Recensione
}