const { json } = require('express')
const Joi = require('joi')
const { query } = require('mssql')

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
        id: Joi.string().max(28),
        nome: Joi.string().max(20),
        cognome: Joi.string().max(20),
        eta: Joi.string(),
        paese: Joi.string().max(10)
    })
}

const AddAccount = {
    query: Joi.object().keys({
        id: Joi.string().max(28),
        nickname: Joi.string().max(20),
        punteggio: Joi.number().integer(),
        partitegiocate: Joi.number().integer().min(0),
        partitevinte: Joi.number().integer().min(0),
        soldi: Joi.number().integer()
    })
}

const Utente = {
    query: Joi.object().keys({
        id: Joi.string().max(28)
    })
}

module.exports = {
    Recensione, AllRecensione, AddUtente, AddAccount, Utente
}