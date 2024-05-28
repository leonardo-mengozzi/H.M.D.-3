const Joi = require('joi')

const recensione = {
    query:Joi.object().keys({
    body: Joi.object().keys({
        datascrittura: Joi.date()}),
        contenuto: Joi.string().length(500),
        suggerimento: Joi.string().length(250),
        valutazione: Joi.number().integer().min(1).max(5),
    })
}

// todo: altri joi

module.exports = {
    recensione
    // todo: , nomi altri joi
}