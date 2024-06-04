const query = require("../utils/db_connection")

const RecensioneColonne = async (colonna) => {
    let q = await query(`select ${colonna} from Recensione`)
    return q
}

const AllRecensione = async (numeroColonne) => {
    let q = await query(`select top ${numeroColonne} * from Recensione`)
    return q
}

const AddUtente = async (id, nome, cognome, eta, paese) => {
    let q = await query(`insert into Utente values ('${id}', '${nome}', '${cognome}', '${eta}', '${paese}')`)
    return q
}

const AddAccount = async (id, nickname, punteggio, partitegiocate, partitevinte, soldi) => {
    let q = await query(`insert into Account values ('${id}', '${nickname}', '${punteggio}', '${partitegiocate}', '${partitevinte}', '${soldi}')`)
    return q
}


const Utente = async (id) => {
    let q = await query(`select * from Utente where Id = '${id}'`)
    return q
}

module.exports = {
    RecensioneColonne, AllRecensione, AddUtente, AddAccount, Utente
}