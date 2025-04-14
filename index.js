const express = require('express');
const app = express();
const path = require('path');
//const logger = require('./middleware/logger');
//const errorHandler = require('./middleware/errorHandler');

app.get('', (req,res) => 
    {
res.send("HOME PAGE")
})


const PORT = 3000;

app.listen(PORT, () =>
    { console.log(`Server started on port ${PORT}`)
    })
