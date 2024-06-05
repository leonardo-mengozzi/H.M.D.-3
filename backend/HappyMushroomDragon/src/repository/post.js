const query = require("../utils/db_connection")

const Recensioni = async () => {
    let q = await query(`select * from Recensione`)
    return q
}

const AddRecensione = async (datascrittura, idutente, contenuto, suggerimento, valutazione) => {
    let q = await query(`insert into Recensione values ('${datascrittura}', '${idutente}', '${contenuto}', '${suggerimento}', '${valutazione}')`)
    return q
}

const Utente = async (id) => {
    let q = await query(`select * from Utente where Id = '${id}'`)
    return q
}

const AddUtente = async (id, nome, cognome, eta, paese) => {
    let q = await query(`insert into Utente values ('${id}', '${nome}', '${cognome}', '${eta}', '${paese}')`)
    return q
}

const Account = async (id) => {
    let q = await query(`select * from Account where IdUser = '${id}'`)
    return q
}

const AddAccount = async (id, nickname, punteggio, soldi) => {
    let q = await query(`insert into Account values ('${id}', '${nickname}', '${punteggio}', '${soldi}')`)
    return q
}

const updatePuntiAccount = async(id, punti) => {
    let q = await query(`update Account set Punteggio = Punteggio + '${punti}' where IdUser = '${id}'`)
    return q
}

const updateSoldiAccount = async(id, soldi) => {
    let q = await query(`update Account set Soldi = Soldi + '${soldi}' where IdUser = '${id}'`)
    return q
}

const personaggi = async () => {
    let q = await query(`select * from Personaggio`)
    return q
}

module.exports = {
    Recensioni, AddRecensione, 
    
    Utente, AddUtente, 
    
    Account, AddAccount,

    updatePuntiAccount, updateSoldiAccount,

    personaggi, 
}