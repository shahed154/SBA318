//just copied stuff i found here https://expressjs.com/en/guide/error-handling.html
// apparently ur supposed to use arrow function and use const instead of function itself?? 

const errorHandler = (err, req, res, next) => 
    
    {
    console.error(err.stack);
    
    res.status(err.status || 500).send(`
        
      <h1>Error: ${err.status || 500}</h1>
      <p>${err.message || 'Internal Server Error'}</p>
      <a href="/">Return Home</a>
    `);
  };
  
  module.exports = errorHandler;
  
