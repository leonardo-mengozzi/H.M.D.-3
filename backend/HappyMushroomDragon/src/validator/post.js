const { json } = require('express')
const Joi = require('joi')
const { query } = require('mssql')

const Recensioni = {
    query: Joi.object().keys({})
}

const AddRecensione = {
    query: Joi.object().keys({
        datascrittura: Joi.string(),
        idutente: Joi.string().max(28),
        contenuto: Joi.string().max(500),
        suggerimento: Joi.string().max(250),
        valutazione: Joi.number().integer().min(1).max(5)
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

const Account = {
    query: Joi.object().keys({
        id: Joi.string().max(28)
    })
}

const updatePuntiAccount = {
    query: Joi.object().keys({
        id: Joi.string().max(28),
        punti: Joi.number().integer()
    })
}

const updateSoldiAccount = {
    query: Joi.object().keys({
        id: Joi.string().max(28),
        soldi: Joi.number().integer()
    })
}

const personaggi = {query: Joi.object().keys({})}

module.exports = {
    Recensioni, AddRecensione, 
    
    Account, AddAccount, 
    
    Utente, AddUtente,

    updatePuntiAccount, updateSoldiAccount,

    personaggi, 
}