const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandling')

app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/users'))
app.use('/api/listings', require('./routes/listings'));
app.use('/api/categories', require('./routes/categories'));


app.get('', (req,res) => 
    {
res.send("HOME PAGE")
})


const PORT = 3000;

app.listen(PORT, () =>
    { console.log(`Server started on port ${PORT}`)
    })
