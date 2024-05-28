const query = require("../utils/db_connection")

const RecensioneColonne = async (colonna) => {
    let q = await query(`select ${colonna} from Recensione`)
    return q
}


module.exports = {
    RecensioneColonne,
}