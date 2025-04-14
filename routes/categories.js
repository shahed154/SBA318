let categories = [
    { id: 1, name: 'Cars', description: 'Cars for sale' },
    { id: 2, name: 'Jewelry', description: 'Jewelry for sale '},
    { id: 3, name: 'Clothes', description: 'Clothes for sale' }
  ];

  const getAllCategories = () => {
    return [...categories];
  }
  
  const getCategoryById = (id) => {
    return categories.find(category => category.id === parseInt(id));
  };

  module.exports = {
    getAllCategories,
    getCategoryById
  };