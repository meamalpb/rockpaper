const {sol,choice}    = require('./main');
const express         = require('express');
const app             = express()

app.get('/game/start',(req,res) => {
    res.json(sol);
});

app.get('/game/choices',(req,res) => {
    res.json(choice);
});

app.listen(3000,function(){console.log('http://localhost:3000/game/start for result \nhttp://localhost:3000/game/choices for choices');});


