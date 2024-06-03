const query = require("../utils/db_connection")

const RecensioneColonne = async (colonna) => {
    let q = await query(`select ${colonna} from Recensione`)
    return q
}

const AllRecensione = async (numeroColonne) => {
    let q = await query(`select top ${numeroColonne} * from Recensione`)
    return q
}

const AddUtente = async(nome, cognome, eta, paese) => {
    let q = await query(`insert into Utente values (${nome}, ${cognome}, ${eta}, ${paese})`)
    return q
}

module.exports = {
    RecensioneColonne, AllRecensione, AddUtente
}