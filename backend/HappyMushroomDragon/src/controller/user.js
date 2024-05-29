
const httpStatus = require("http-status");
const postRepository = require("../repository/post");


/*
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// richieste
router.get("/", (req, res) => {
    res.render("pages/shop");
});

router.post("/compra", (req, res) => {
    var soldiDisponibili = req.body.Money; // query per ottenere le monete del giocatore
    var costoPngDaComprare = req.body.costoPngDaCommprare;

    if (parseInt(soldiDisponibili) > parseInt(costoPngDaComprare)) {
        res.send('PGN comprato, monete rimanenti ' + (soldiDisponibili - costoPngDaComprare).toString());
    }
    res.send('Monete insufficenti, ti mancano' + (costoPngDaComprare - soldiDisponibili).toString() + ' monete.');
});

router.post('/write', (req, res) => {
    connection.query('USE DB_HMD;');

    connection.query('SELECT TOP 10 * FROM Recensini;', 
    function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(results);
    });

    connection.end(function (err) {
        if (err) {
            console.log(err);
            return;
        }
    })
});

const connect = async (query) => {
    try {
        const connection = await sql.connect(confing);
        const result = await connection.query(query);
        await connection.close();
        return result.recordset; // Restituisci i risultati della query
    } catch (error) {
        console.error("C'è stato un problema con la connessione al DB:", error);
        throw error; // Rilancia l'errore per gestirlo in un altro punto del codice, se necessario
    }
};

router.post('/read', (req, res) => {
    connect("select * from Recensione;").then((result) => {
        res.status(200).json({data:result});
    });
});
*/

// localhost:3001/api/v1/commenti?nomeColonna=contenuto
const readRecensione = (req, res) => {
    const nomeColonna = req.query.nomeColonna
    postRepository.RecensioneColonne(nomeColonna)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
}

module.exports = {readRecensione}; 