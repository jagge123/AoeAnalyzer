const axios = require('axios');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/aoe', function (req, res) {
    axios.get('https://aoe2.net/api/strings?game=aoe2de&language=en')
    .then(response => {
        res.json(response.data); 
    })
  })

  app.get('/aoe/:id', function (req, res) {
    axios.get(`https://aoe2.net/api/player/lastmatch?game=aoe2de&steam_id=${req.params.id}`)
    .then(response => {
        res.json(response.data); 
    })
  })
//prettier för formattering --- kanske vs code extension
app.listen(port);