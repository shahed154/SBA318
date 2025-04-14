let users = [
    { id: 1, name: 'Shahed Adnan', email: 'shahed@adnan.com' },
    { id: 2, name: 'Dukes Mayo', email: 'dukes@mayo.com' }
  ];
  
  const getAllUsers = () => {
    return [...users];
  };

module.exports = {
  getAllUsers}