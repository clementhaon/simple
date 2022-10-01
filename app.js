const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('<p>testtttt celm</p>');
});

app.listen(5000, () => {
    console.log('App listening port 5000');
});