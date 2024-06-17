var express = require('express');
var app = express();
var ejs = require('ejs');
const axios = require('axios');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/pages');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

const url = 'http://gateway:3000/api/v1/HMD';

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/singin', (req, res) => {
    res.render('singing');
});

app.get('/info', (req, res) => {
    res.render('info');
});

app.get('/user', (req, res) => {
    res.render('recensioni');
})

app.get('/game', (req, res) => {
    res.render('game');
});

// http://localhost:3002/recensioni
app.get('/recensioni', (req, res) => {
    axios.get(url + '/recensioni', 
        {headers: {"Authorization" : req.headers["authorization"]}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.post('/addRecensione', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        datascrittura: req.query.datascrittura,
        idutente: req.query.idutente,
        contenuto: req.query.contenuto,
        suggerimento: req.query.suggerimento,
        valutazione: req.query.valutazione
    });

    axios.post(url + '/addRecensione?' + params.toString(), {},
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

// todo: come fare i put (speriamo siano simili hai post ;( )

app.post('/addUtente', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id: req.query.id,
        nome: req.query.nome,
        cognome: req.query.cognome,
        eta: req.query.eta,
        paese: req.query.paese
    });

    axios.post(url + '/addUtente?' + params.toString(), {},
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.post('/addAccount', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id: req.query.id,
        nickname:  req.query.nickname,
        punteggio: req.query.punteggio,
        soldi: req.query.soldi
    });

    axios.post(url + '/addAccount?' + params.toString(), {},
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.get('/utente', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id: req.query.id
    });

    axios.get(url + '/utente?' + params.toString(),
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.get('/account', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
         id: req.query.id
    });

    axios.get(url + '/account?' + params.toString(),
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.put('/updatePuntiAccount', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
         id: req.query.id,
         punti: req.query.punti
    });

    axios.put(url + '/updatePuntiAccount?' + params.toString(), {},
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.put('/updateSoldiAccount', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
         id : req.query.id,
         soldi: req.query.soldi
    });
    
    axios.put(url + '/updateSoldiAccount?' + params.toString(), {},
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.get('/personaggi', (req, res) => {
    var token = req.headers["authorization"];

    axios.get(url + '/personaggi',
    {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.get('/personaggiPosseduti', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id : req.query.id
   });

   axios.get(url + '/personaggiPosseduti?' + params.toString(),
   {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.post('/compra', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id : req.query.id,
        nomepersonaggio: req.query.nomepersonaggio
    });

    axios.post(url + '/compra?' + params.toString(), {},
        {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.get('/nemico', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id : req.query.id
    });

    axios.get(url + '/nemico?' + params.toString(),
    {headers: {"Authorization" : token}})
     .then(response => res.json(response.data))
     .catch(ex => res.json({response : ex}));
});

app.get('/sfondo', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id : req.query.id
    });

    axios.get(url + '/sfondo?' + params.toString(),
    {headers: {"Authorization" : token}})
     .then(response => res.json(response.data))
     .catch(ex => res.json({response : ex}));
});

app.get('/ostacolo', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id : req.query.id
    });

    axios.get(url + '/ostacolo?' + params.toString(),
    {headers: {"Authorization" : token}})
     .then(response => res.json(response.data))
     .catch(ex => res.json({response : ex}));
});

app.get('/nemicipartita', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id : req.query.id
    });

    axios.get(url + '/nemicipartita?' + params.toString(),
    {headers: {"Authorization" : token}})
     .then(response => res.json(response.data))
     .catch(ex => res.json({response : ex}));
});

// todo: NON VA ERRORE 400
app.post('/addnemicipartita', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        idpartita: req.query.idpartia,
        idnemico: req.query.idnemico,
        numeronemici: req.query.numeronemici
    });

    axios.post(url + '/addnemicipartita?' + params.toString(), {},
    {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.get('/ostacolipartita', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id : req.query.id
    });

    axios.get(url + '/ostacolipartita?' + params.toString(),
    {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

// todo: NON VA ERRORE 400
app.post('/addostacolipartita', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        idpartia: req.query.idpartita,
        idostacolo: req.query.idostacolo,
        numeroostacoli: req.query.numeroostacoli
    });

    axios.post(url + '/addostacolipartita?' + params.toString(), {},
    {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});


app.get('/partita', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id: req.query.id
    });

    axios.get(url + '/partita?' + params.toString(),
    {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

// todo: non va errore 400
app.post('/addpartita', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        datainizio: req.query.datainizio,
        tempo: req.query.tempo,
        vittoria: req.query.vittoria,
        nomepersonaggio: req.query.nomepersonaggio,
        idsfondo: req.query.idsfondo,
        idaccount: req.query.idaccount
    });

    axios.post(url + '/addpartita?' + params.toString(), {},
    {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

app.get('/risultatopartita', (req, res) => {
    var token = req.headers["authorization"];

    const params = new URLSearchParams({
        id: req.query.id
    });

    axios.get(url + '/risultatopartita?' + params.toString(),
    {headers: {"Authorization" : token}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

const PORT = 3000;
app.listen(PORT, () => console.log("Service H.M.D. online at port: " + PORT));