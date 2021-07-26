//associar as dependencias instaladas
const express = require('express');

//iniciar app express
const app = express();

let port = 5000;

//'END POINT INVÁLIDO!'
app.get('/', function(request, response){
    response.send('END POINT INVÁLIDO!');
});

const bodyParser = require('body-parser');
//este middleware deve estar acima das routes-handlers!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//todo o url começado por '/api' chama as rotas em './routes/api'
const routes = require('./routes/api');
app.use('/api', routes);

//servidor á escuta no port 5000
//'process.env.port': caso usemos o Heroku
app.listen(process.env.port || port, function(){
    console.log('Servidor em execução na porta: '+ port);
});



