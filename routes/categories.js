const express = require('express');
const router = express.Router()



let categories = [
    { id: 1, name: 'Cars', description: 'Cars for sale' },
    { id: 2, name: 'Jewelry', description: 'Jewelry for sale '},
    { id: 3, name: 'Clothes', description: 'Clothes for sale' }
  ];

  const getCategoryById = (id) => 
    {
        return categories.find(category => category.id === parseInt(id))
    };
    
    
    
    const getAllCategories = () => 
    {
      return [...categories];
    };
    
    
    const createCategory = (categoryToCreate) =>
    {
      const newCategory = 
      {
          id: categories.length + 1,
    
          name: categoryToCreate.name,
    
          description: categoryToCreate.description || ''
    
      };
      categories.push(newCategory);
      return newCategory;
    };
    
    router.post('/', (req, res, next) => 
    {
      if (!req.body.name) {
          const err = new Error('NEEDS A NAME');
          err.status = 400;
          return next(err);
      }
      
      const newCategory = createCategory(req.body);
      res.status(201).json(newCategory);
    });


    router.get('/', (req, res) => {
      res.json(getAllCategories());
  });

  router.get('/:id', (req, res, next) => {
    
    const category = getCategoryById(req.params.id);

    res.json(category);
});

    
    module.exports = router;
    module.exports.getAllCategories = getAllCategories;
    module.exports.getCategoryById = getCategoryById;
    