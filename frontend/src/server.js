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
    const params = new URLSearchParams({
        datascrittura: '2005/11/15',
        idutente: 'qweproiy12lkjhpv0alkj4kh',
        contenuto: 'la ciola',
        suggerimento: 'il topo cazzo',
        valutazione: 4
    });

    axios.post(url + '/addRecensione?' + params.toString(), {},
        {headers: {"Authorization" : req.headers["authorization"]}})
    .then(response => res.json(response.data))
    .catch(ex => res.json({response : ex}));
});

// todo: come interpretare token per avere id nel frontend e come fare i put (speriamo siano simili hai post ;( )

/*
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

const nemico = (req, res) => {
    const id = req.query.id
    postRepository.nemico(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const sfondo = (req, res) => {
    const id = req.query.id
    postRepository.sfondo(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const ostacolo = (req, res) => {
    const id = req.query.id
    postRepository.ostacolo(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const nemicipartita = (req, res) => {
    const id = req.query.id
    postRepository.nemicipartita(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const addnemicipartita = (req, res) => {
    const idpartia = req.query.idpartita
    const idnemico = req.query.idnemico
    const numeronemici = req.query.numeronemici
    postRepository.addnemicipartita(idpartia, idnemico, numeronemici)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const ostacolipartita = (req, res) => {
    const id = req.query.id
    postRepository.ostacolipartita(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const addostacolipartita = (req, res) => {
    const idpartia = req.query.idpartita
    const idostacolo = req.query.idostacolo
    const numeroostacoli = req.query.numeroostacoli
    postRepository.addostacolipartita(idpartia, idostacolo, numeroostacoli)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const partita = (req, res) => {
    const id = req.query.id
    postRepository.partita(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const addpartita = (req, res) => {
    const datainizio = req.query.datainizio
    const tempo = req.query.tempo
    const vittoria = req.query.vittoria
    const nomepersonaggio = req.query.nomepersonaggio
    const idsfondo = req.query.idsfondo
    const idaccount = req.query.idaccount
    postRepository.addpartita(datainizio, tempo, vittoria, nomepersonaggio, idsfondo, idaccount)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 

const risultatopartita = (req, res) => {
    const id = req.query.id
    postRepository.risultatopartita(id)
    .then((Nome) => {
        res.status(httpStatus.OK).json({data: Nome})
    })
} 
*/

const PORT = 3000;
app.listen(PORT, () => console.log("Service H.M.D. online at port: " + PORT));