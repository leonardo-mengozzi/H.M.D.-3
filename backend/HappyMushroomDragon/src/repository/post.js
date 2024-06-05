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

const personaggiPosseduti = async (id) => {
    let q = await query(`select NomePersonaggio from Possiede where IdAccount = '${id}'`)
    return q
}

// localhost:3001/api/v1/HMD/compra?id=asldjkfqpouiyvcljhlfkjha&nomepersonaggio=personaggio1
const compra = async (id, nomepersonaggio) => {

    let tempSoldi = await query(`select Soldi from Account where IdUser = '${id}'`)
    let soldi = tempSoldi[0].Soldi
    let temPrezzo = await query(`select Costo from Personaggio where Nome = '${nomepersonaggio}'`)
    let prezzo = temPrezzo[0].Costo

    if (soldi >= prezzo){
        await query(`insert into Possiede values ('${id}', '${nomepersonaggio}')`)
        updateSoldiAccount(id, prezzo * -1)
        return 1
    }
    return 0
}

const nemico = async (id) => {
    let q = await query(`select * from Nemico where Id = '${id}'`)
    return q
}
const sfondo = async (id) => {
    let q = await query(`select * from Sfondo where Id = '${id}'`)
    return q
}
const ostacolo = async (id) => {
    let q = await query(`select * from Ostacolo where Id = '${id}'`)
    return q
}

const nemicipartita = async (idpartita) => {
    let q = await query(`select IdNemico, NumeroNemici from PartitaNemico where IdPartita = '${idpartita}'`)
    return q
}
const ostacolipartita = async (idpartita) => {
    let q = await query(`select IdOstacolo, NumeroOstacoli as NumeroOstacoli from PartitaOstacolo where IdPartita = '${idpartita}'`)
    return q
}
const addnemicipartita = async (idpartita, idnemico, numeronemici) => {
    let q = await query(`insert into PartitaNemico values ('${idpartita}', '${idnemico}', '${numeronemici}')`)
    return q
}
const addostacolipartita = async (idpartita, idostacoli, numeroostacoli) => {
    let q = await query(`insert into PartitaOstacolo values ('${idpartita}', '${idostacoli}', '${numeroostacoli}')`)
    return q
}

const partita = async (id) => {
    let q = await query(`select * from Partita where Id = '${id}'`)
    return q
}

const addpartita = async ( datainizio, tempo, vittoria, nomepersonaggio, idsfondo, idaccount) => {
    let q = await query(`insert into Partita OUTPUT inserted.Id values ('${datainizio}', '${tempo}', '${vittoria}', '${nomepersonaggio}', '${idsfondo}', '${idaccount}')`)
    return q
}

const risultatopartita = async (id) => {
    //todo:
}

module.exports = {
    Recensioni, AddRecensione, 
    
    Utente, AddUtente, 
    
    Account, AddAccount,

    updatePuntiAccount, updateSoldiAccount,

    personaggi, personaggiPosseduti, compra,

    nemico, sfondo, ostacolo,

    nemicipartita, ostacolipartita, addnemicipartita, addostacolipartita, 

    partita, addpartita, risultatopartita
}