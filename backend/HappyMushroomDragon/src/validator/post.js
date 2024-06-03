const Joi = require('joi')

const Recensione = {
    query:Joi.object().keys({
        nomeColonna: Joi.string()
    })

}

const AllRecensione = {
    query: Joi.object().keys({
        numeroRecord: Joi.number().integer().min(0)
    })
}

const AddUtente = {
    query: Joi.object().keys({
        nome: Joi.string().length(20),
        cognome: Joi.string().length(20),
        eta: Joi.date(),
        paese: Joi.string().length(10)
    })
}

module.exports = {
    Recensione, AllRecensione, AddUtente
}