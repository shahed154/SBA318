const express = require('express');
const router = express.Router()



let users = [
    { id: 1, name: 'Shahed Adnan', email: 'shahed@adnan.com' },
    { id: 2, name: 'Dukes Mayo', email: 'dukes@mayo.com' }
  ];
  
  const getAllUsers = () => {
    return [...users];
  };

  router.get('/', (req, res) => {
    const users = getAllUsers();
    res.json(users);
  });
  
// this dont work 
// module.exports = {
//   getAllUsers}


  module.exports = router;