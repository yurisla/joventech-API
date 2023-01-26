var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
    res.send('olá mundo');
});

app.get('/jovemtech/listaalunos',function(req, res){
    res.send('alunos');
});

app.get('/jovemtech/professores',function(eq, res){
    res.send('professores');
});

app.get('/jovemtech/cursos',function(req, res){
    res.send('cursos');
});

app.get('/jovemtech/inscricao',function(req, res){
    res.send('inscricao');
});

app.get('/jovemtech/comentarios',function(req, res){
    res.send('comentarios');
});

app.listen(8081,function(){
    console.log("servidor rodando na porta http://localhost:8081/home");
}); 