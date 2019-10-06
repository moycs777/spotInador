const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    console.log('oii!');
    return res.send('oii');
});

app.listen(3333);