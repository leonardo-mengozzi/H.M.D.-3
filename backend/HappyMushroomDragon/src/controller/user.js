
const httpStatus = require("http-status");
const postRepository = require("../repository/post");
const { query } = require("mssql");

const readRecensioni = (req, res) => {
    postRepository.Recensioni()
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const AddRecensione = (req, res) => {
    const datascrittura = req.query.datascrittura
    const idutente = req.query.idutente
    const contenuto = req.query.contenuto
    const suggerimento = req.query.suggerimento
    const valutazione = req.query.valutazione
    postRepository.AddRecensione(datascrittura, idutente, contenuto, suggerimento, valutazione)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const AddUtente = (req, res) => {
    const id = req.query.id
    const nome = req.query.nome
    const cognome = req.query.cognome
    const eta = req.query.eta
    const paese = req.query.paese
    postRepository.AddUtente(id, nome, cognome, eta, paese)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const AddAccount = (req, res) => {
    const id = req.query.id
    const nickname = req.query.nickname
    const punteggio = req.query.punteggio
    const soldi = req.query.soldi
    postRepository.AddAccount(id, nickname, punteggio, soldi)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const readUtente = (req, res) => {
    const id = req.query.id
    postRepository.Utente(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const readAccount = (req, res) => {
    const id = req.query.id
    postRepository.Account(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const updatePuntiAccount = (req, res) => {
    const id = req.query.id
    const punti = req.query.punti
    postRepository.updatePuntiAccount(id, punti)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const updateSoldiAccount = (req, res) => {
    const id = req.query.id
    const soldi = req.query.soldi
    postRepository.updateSoldiAccount(id, soldi)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const personaggi = (req, res) => {
    postRepository.personaggi()
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const personaggiPosseduti = (req, res) => {
    const id = req.query.id
    postRepository.personaggiPosseduti(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

const compra = (req, res) => {
    const id = req.query.id
    const nome = req.query.nomepersonaggio
    postRepository.compra(id, nome)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

module.exports = {
    readRecensioni, AddRecensione, 
    
    readUtente, AddUtente, 
    
    readAccount, AddAccount,

    updatePuntiAccount, updateSoldiAccount,

    personaggi, personaggiPosseduti, compra
};