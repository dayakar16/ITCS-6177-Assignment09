const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');


app.get('/', function(req, res) {
    res.send("This is Dayakar Ravuri");
});

app.get('/say', (req, res) => {
axios.get('https://us-central1-midyear-respect-327721.cloudfunctions.net/returnkeyword?keyword='+ req.query.keyword)
  .then(function (response) {
    // handle success
    console.log(response.data);
    res.status(200).send(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
   res.status(500).send(error.message)
  });

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


