// main index 

const express = require('express');
const app = express();
const path = require('path');

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandling')

app.set('view engine', 'ejs')
app.set('views', './views');

//

//

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(logger);


app.use('/api/users', require('./routes/users'))
app.use('/api/listings', require('./routes/listings'))
app.use('/api/categories', require('./routes/categories'));

app.use(errorHandler);


app.get('/', (req, res) => {
    res.render('index', { 
        title: 'SHOP HOMEPAGE', 
        description: 'Buy and sell items!!' 
    });
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});



const PORT = 3000;

app.listen(PORT, () =>
    { console.log(`Server started on port ${PORT}`)
    })
