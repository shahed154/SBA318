// main utilities stuff for listings 


const express = require('express');
const router = express.Router()

let listings = [
    { 
      id: 1, 
      title: '2024 BMW 530i', 
      description: 'BEEMERRRRRR',  
      price: 150000, 
      userId: 1, 
      categoryId: 1 
    },
    { 
      id: 2, 
      title: 'Diamond Necklace', 
      description: 'ICED OUT', 
      price: 2500000, 
      userId: 2, 
      categoryId: 2 
    },
    { 
      id: 3, 
      title: 'SQUARE PANTS', 
      description: 'SPONGE BOB', 
      price: 15000000000, 
      userId: 1, 
      categoryId: 3 
    }
  ];


  const getAllListings = () =>
     {
    return [...listings]
};

  const getListingById = (id) => 
  {
    return listings.find(listing => listing.id === parseInt(id))
};

  const getListingsByUserId = (userId) => 
    {
    return listings.filter(listing => listing.userId === userId);
};

//  editing listings 


const createListing = (listing) => 
  {
  //
  const newListing = {
    //
      id: listings.length + 1,
      title: listing.title,
      description: listing.description,
      price: parseInt(listing.price),
      userId: parseInt(listing.userId),
      categoryId: parseInt(listing.categoryId)
  };
  listings.push(newListing);
  return newListing
};

const updateListing = (id, updates) => 
  {




  const index = listings.findIndex(listing => listing.id === parseInt(id));


  if (updates.price) 
    {
    updates.price = parseInt(updates.price)
  }
  
  if (updates.userId) 
    {
    updates.userId = parseInt(updates.userId);
  }
  
  if (updates.categoryId) 
    {
    updates.categoryId = parseInt(updates.categoryId)
  }
      
      listings[index] = { ...listings[index], ...updates }

      return listings[index];
  
 
};


const deleteListing = (id) => 
  {

  const index = listings.findIndex(listing => 
    listing.id === parseInt(id))

   {
      const deletedListing = listings[index];
      listings = listings.filter(listing => 
        listing.id !== parseInt(id));

      return deletedListing


  }

};


router.get('/:id', (req, res) => {
  const listing = getListingById(req.params.id);

  res.json(listing);
});

const getListingsByCategoryId = (categoryId) => {
  return listings.filter(listing => listing.categoryId === parseInt(categoryId))

  
};

router.post('/', (req, res, next) => {

  if (!req.body.title || !req.body.price || !req.body.categoryId || !req.body.userId) {

      const err = new Error('FINISH ALL LISTING FORM PROPERLY')
      err.status = 400

      return next(err)
  }
  
  const newListing = createListing(req.body);
  res.status(201).json(newListing);
});

router.post('/', (req, res, next) => {

  if (!req.body.title || !req.body.price || !req.body.categoryId || !req.body.userId) {
    
      const err = new Error('FINISH ALL LISTING FORM PROPERLY');
      err.status = 400;
      return next(err);
  }
  
  const newListing = createListing(req.body);
  res.status(201).json(newListing);
});

router.put('/:id', (req, res, next) => {

  const listing = updateListing(req.params.id, req.body);
  
  if (!listing) {

      const err = new Error('LISTING NOT FOUND ');
      err.status = 404;
      return next(err);
  }
  
  res.json(listing);
});

router.delete('/:id', (req, res, next) =>
   {

  const listing = deleteListing(req.params.id);
  
  if (!listing) {

    const err = new Error('LISTING NOT FOUND');
    err.status = 404;
    return next(err);
  }
  
  res.json({ message: 'Listing deleted', listing });
});



router.get('/new', (req, res) => {
  res.render('newListing', { 
      title: 'Create Listing', 
      description: 'Add new item to sell' 
  });
});





module.exports = router;


module.exports.getAllListings = getAllListings;
module.exports.getListingById = getListingById;
module.exports.getListingsByCategoryId = getListingsByCategoryId;
module.exports.getListingsByUserId = getListingsByUserId;