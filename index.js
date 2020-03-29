const axios = require('axios');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/aoe', function (req, res) {
    axios.get('https://aoe2.net/api/strings?game=aoe2de&language=en')
    .then(response => {
        //res.sendFile(response.data, {root: __dirname});
        res.json(response.data); 
    })
  })

app.listen(port);